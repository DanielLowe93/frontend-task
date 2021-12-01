import React from 'react';
import { render } from '@testing-library/react';
import data from '../../../data.json';
import ImageDataBlock from './index.js';

it('should display the amount of likes and the length of time ago the image was uploaded', () => {
  const { getByText } = render(
    <ImageDataBlock
      takenTimestamp={data.taken_at_timestamp}
      likeCount={40}
      setLikeCount={jest.fn()}
    />
  );

  expect(getByText('40 likes')).toBeTruthy();
  expect(getByText('4 days ago')).toBeTruthy();
})
