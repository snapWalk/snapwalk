import React from 'react';

export default function CodeBlock ({
    code,
    isString
}) {

    // Check for empty prop
    if (!code) {
        return <p className="text-danger">Nothing to display</p>
    }

    let json = code;
    if (!isString) {
        json = JSON.stringify(code, null, 2); // Get formatted JSON
    }

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