import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import sinon from 'sinon';
import * as _reactUtils from '../../../react-utils';

import { Error } from '../../../../src/components/common';

describe('Common Components', () => {
    describe('<Error />', () => {
        it('should display the message prop', () => {
            const props = {message: 'Test Message', id: 'foo-id'};
            const rendered = _reactUtils.wrapAndRender(Error, props);
            const spans = TestUtils.scryRenderedDOMComponentsWithTag(rendered, 'span');
            const element = _reactUtils.findElementById(spans, props.id);

            expect(
                element.textContent
            ).toEqual(
                props.message
            );
        });
        it('should display a generic message if none is passed', () => {
            const stub = sinon.stub(console, 'error');

            const genericMessage = 'No detail provided';

            const rendered = _reactUtils.wrapAndRender(Error, undefined);
            const spans = TestUtils.scryRenderedDOMComponentsWithTag(rendered, 'span');
            const element = _reactUtils.findElementById(spans, 'foo-id');

            expect(TestUtils.isDOMComponent(element)).toBe(true);
            expect(element.textContent).toEqual(genericMessage);

            stub.restore();
        });
    });
});
