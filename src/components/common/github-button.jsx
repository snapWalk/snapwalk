import React from 'react';

export default function GithubButton ({
    label,
    icon,
    countHref,
    countApi,
    countAriaLabel,
    ariaLabel
}) {
    return (
        <div style={style}>
            <a
                className="github-button"
                href="https://github.com/mikechabot/react-boilerplate"
                data-icon={icon}
                data-style="mega"
                data-count-href={countHref}
                data-count-api={countApi}
                data-count-aria-label={countAriaLabel}
                aria-label={ariaLabel}>
                { label }
            </a>
        </div>
    )
}

const style = {
    margin: 5
};