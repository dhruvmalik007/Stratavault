import { PlopTypes } from "@turbo/gen";
import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";



export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // Helper to generate imports
  plop.setHelper("generateImports", (text: string) => {
    if (!text) return "";
    return text
      .split(" ")
      .map((pkg) => pkg.trim())
      .filter((pkg) => !!pkg)
      .map((pkg) => {
        // crude heuristic: if pkg has @scope/name, use name. 
        // If just name, use name.
        // sanitize var name
        const outputName = pkg.replace(/[^a-zA-Z0-9]/g, "_");
        return `import * as ${outputName} from "${pkg}";`;
      })
      .join("\n");
  });

  plop.setGenerator("package", {
    description: "Creates a new package in the packages directory",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the package?",
        validate: (input: string) => {
          if (input.includes(" ")) {
            return "package name cannot include spaces";
          }
          if (!input) {
            return "package name is required";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "deps",
        message:
          "What pnpm packages do you want to install? (space separated, e.g. 'zod react')",
      },
    ],
    actions: [
      {
        type: "add",
        path: "packages/{{ name }}/package.json",
        templateFile: "templates/package.json.hbs",
      },
      {
        type: "add",
        path: "packages/{{ name }}/tsconfig.json",
        templateFile: "templates/tsconfig.json.hbs",
      },
      {
        type: "add",
        path: "packages/{{ name }}/src/index.ts",
        templateFile: "templates/src/index.ts.hbs",
      },
      (answers) => {
        // Custom action to install packages
        // We wrap it to match the signature if possible, or just register it as a named action type if preferred.
        // But plop allows function actions directly in the array.
        // However, we need plopFilePath to find the root.
        // 'plop.params.dest' might not be available. 
        // We can calculate path relative to CWD (usually repo root).
        if (!answers.deps) return "Skipping install";

        const targetDir = path.join(process.cwd(), "packages", answers.name as string);
        console.log(`\nInstalling dependencies in ${targetDir}...`);
        try {
          execSync(`pnpm add ${answers.deps}`, { cwd: targetDir, stdio: 'inherit' });
          return `Installed ${answers.deps}`;
        } catch (e) {
          return `Error installing: ${e}`;
        }
      }
    ],
  });
}
