import React from 'react';
import TestUtils from 'react-dom/test-utils';
import {expect} from 'chai';
import {renderStatelessComponent} from '../../../react-utils';
import Flex from '../../../../src/components/common/glamorous/Flex';

describe('Flexbox Component', () => {
  let props;
  beforeEach(() => {
    props = {id: 'ABC'};
  });

  describe('<Flex />', () => {
    it('Should return a Flex component', () => {
      const component = renderStatelessComponent(Flex, props);
      const element = TestUtils.findRenderedDOMComponentWithTag(component, 'div');
      expect(element.id).to.equal(props.id);
    });
  });
});
