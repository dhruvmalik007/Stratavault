declare module 'javascript-lp-solver' {
    export interface Model {
        optimize: string;
        opType: string;
        constraints: Record<string, any>;
        variables: Record<string, any>;
        ints?: Record<string, 1>;
    }

    export function Solve(model: Model): any;
}
