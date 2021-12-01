import React from 'react';
import { render } from '@testing-library/react';
import data from '../../../data.json';
import Image from './index.js';

it('should display an image', () => {
  const { getByTestId } = render(
    <Image data={data} />
  );

  expect(getByTestId('image')).toBeTruthy();
})
