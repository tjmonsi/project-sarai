const {describe, it} = global;
import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Landing from '../landing.jsx';

describe('templates.landing', () => {
  it('should work', () => {
    const el = shallow(<Landing />);
    expect(el).to.not.be.null;
  });
});
