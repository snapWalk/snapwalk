import React from 'react';
import TestUtils from 'react-addons-test-utils';
import _ from 'lodash';

/**
 * Stateless components don't get refs, meaning we can't access
 * the DOM, which we need in order to run our assertions.
 * We can solve this by wrapping our component in a generic React
 * class that extends its refs to child components
 *
 * @param Component     Component to be wrapped
 * @param props         Props to pass to component
 * @returns A wrapped React component
 */
export const wrapComponent = (Component, props) => {
    class Wrapper extends React.Component {
        render() {
            return (
                <Component {...props} />
            )
        }
    }
    return <Wrapper />;
};

/**
 * Render a component using React's TestUtils
 * @param component
 * @returns {*}
 */
export const renderComponent = (component) => {
    return TestUtils.renderIntoDocument(component);
};

/**
 * Generically wrap a component and render it with
 * React's TestUtils
 * @param Component
 * @param props
 * @returns A rendered React component
 */
export const wrapAndRender = (Component, props) => {
    return renderComponent(
        wrapComponent(Component, props)
    )
};

/**
 * Find an element by id given a tree of elements
 * @param tree
 * @param id
 * @returns {*}
 */
export const findElementById = (tree, id) => {
    const element = _.find(tree, element => {
        return TestUtils.isDOMComponent(element)
            && element.getAttribute('id') === id;
    });
    if (element) return element;
    console.log('Unable to find element by id "%s"', id);
};

export default [
    wrapComponent,
    renderComponent,
    wrapAndRender,
    findElementById
];