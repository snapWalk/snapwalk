import React from 'react';

export default function CodeBlock ({
    code
}) {

    // Check for empty prop
    if (!code) {
        return <p className="text-danger">Nothing to display</p>
    }

    // Get formatted JSON
    const json = JSON.stringify(code, null, 2);

    // Split on new line
    const lines = json.split('\n');

    return (
        <div>
            <pre>
                { lines.map(getLine) }
            </pre>
        </div>
    );
}

function getLine(line, index) {
    return (
        <div key={index} className="line">
            { line }
        </div>
    )
}