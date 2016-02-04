const {describe, it} = global;
import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import FileUploader from '../file-uploader.jsx';

describe('experiment.file-uploader', () => {
  it('should work', () => {
    const el = shallow(<FileUploader />);
    expect(el).to.not.be.null;
  });
});
