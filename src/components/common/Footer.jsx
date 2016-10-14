import React from 'react';
import GithubButton from './GithubButton';

export default function Footer () {
    return (
        <div style={style.container}>
            <h6>Powered by <a href="https://github.com/mikechabot/react-boilerplate">react-boilerplate</a>.&nbsp;
                Code licensed under <a href="https://github.com/mikechabot/react-boilerplate/blob/master/LICENSE">MIT</a>.
            </h6>
            <div style={style.buttons} >
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
            </div>
        </div>
    )
}

const style = {
    container: {
        textAlign: 'center'
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center'
    }
};