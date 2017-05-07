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
                    href="mikechabot/react-boilerplate"
                    ariaLabel="Star mikechabot/react-boilerplate on GitHub"
                />
                <GithubButton
                    label="Fork"
                    icon="octicon-repo-forked"
                    href="mikechabot/react-boilerplate/fork"
                    ariaLabel="Fork mikechabot/react-boilerplate on GitHub"
                />
                <GithubButton
                    label="Watch"
                    icon="octicon-eye"
                    href="mikechabot/react-boilerplate/subscription"
                    ariaLabel="Watch mikechabot/react-boilerplate on GitHub"
                />
            </Flexbox>
        </div>
    );
}

function GithubButton ({
    label,
    icon,
    href,
    ariaLabel
}) {
    return (
        <div style={{ margin: 5 }}>
            <a className="github-button"
               href={`https://github.com/${href}`}
               data-icon={icon}
               data-size="large"
               data-show-count={true}
               aria-label={ariaLabel}>
                { label }
            </a>
        </div>
    );
}

GithubButton.propTypes = {
    label    : PropTypes.string.isRequired,
    icon     : PropTypes.string.isRequired,
    href     : PropTypes.string.isRequired,
    ariaLabel: PropTypes.string.isRequired
};
