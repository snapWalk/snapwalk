import PropTypes from 'prop-types';
import React from 'react';
import { Flexbox } from './common';

export default function Footer () {
    return (
        <div style={{textAlign: 'center'}}>
            <h6>Powered by <a href="https://github.com/mikechabot/react-boilerplate">react-boilerplate</a>.&nbsp;
                Code licensed under <a href="https://github.com/mikechabot/react-boilerplate/blob/master/LICENSE">MIT</a>.
            </h6>
            <Flexbox hAlignCenter={true}>
                <GithubButton
                    label="Star"
                    icon="octicon-star"
                    countHref="/mikechabot/react-boilerplate/stargazers"
                    countApi="/repos/mikechabot/react-boilerplate#stargazers_count"
                    countAriaLabel="# stargazers on GitHub"
                    ariaLabel="Star mikechabot/react-boilerplate on GitHub"
                />
                <GithubButton
                    label="Fork"
                    icon="octicon-repo-forked"
                    hrefSuffix="/fork"
                    countHref="/mikechabot/react-boilerplate/network"
                    countApi="/repos/mikechabot/react-boilerplate#forks_count"
                    countAriaLabel="# forks on GitHub"
                    ariaLabel="Fork mikechabot/react-boilerplate on GitHub"
                />
                <GithubButton
                    label="Watch"
                    icon="octicon-eye"
                    countHref="/mikechabot/react-boilerplate/watchers"
                    countApi="/repos/mikechabot/react-boilerplate#subscribers_count"
                    countAriaLabel="# watchers on GitHub"
                    ariaLabel="Watch mikechabot/react-boilerplate on GitHub"
                />
            </Flexbox>
        </div>
    );
}

function GithubButton ({
    label,
    icon,
    countHref,
    countApi,
    countAriaLabel,
    ariaLabel
}) {
    return (
        <div style={{ margin: 5 }}>
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
    );
}

GithubButton.propTypes = {
    label         : PropTypes.string.isRequired,
    icon          : PropTypes.string.isRequired,
    countHref     : PropTypes.string.isRequired,
    countApi      : PropTypes.string.isRequired,
    countAriaLabel: PropTypes.string.isRequired,
    ariaLabel     : PropTypes.string.isRequired
};
