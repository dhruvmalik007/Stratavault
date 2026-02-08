"use client";

import React from "react";

export function MessageLog({ logs }: { logs: string[] }) {
    return (
        <div className="mt-4 p-4 border rounded bg-gray-900 text-green-400 font-mono h-64 overflow-y-auto text-sm">
            <h3 className="text-white font-bold mb-2 sticky top-0 bg-gray-900">Live Logs</h3>
            {logs.length === 0 && <span className="text-gray-500">Waiting for events...</span>}
            {logs.map((log, i) => (
                <div key={i} className="whitespace-pre-wrap mb-1">{log}</div>
            ))}
        </div>
    );
}
