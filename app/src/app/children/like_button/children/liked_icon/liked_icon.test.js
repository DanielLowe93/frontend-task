import React from 'react';
import { render } from '@testing-library/react';
import LikedIcon from './index.js';

it('should display a liked icon with the default height of 24', () => {
  const { getByTestId } = render(
    <LikedIcon
      height={null}
    />
  );

  expect(getByTestId('liked-icon')).toBeTruthy();
  expect(getByTestId('liked-icon').getAttribute('height')).toBe('24');
});

it('should display a liked icon with the passed height', () => {
  const height = '12';
  const { getByTestId } = render(
    <LikedIcon
      height={height}
    />
  );

  expect(getByTestId('liked-icon').getAttribute('height')).toBe(height);
});
