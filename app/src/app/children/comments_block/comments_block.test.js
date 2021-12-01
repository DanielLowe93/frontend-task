import React from 'react';
import { render } from '@testing-library/react';
import data from '../../../data.json'
import CommentBlock from './index.js'

it('should display main comment and all comments from data', () => {
  const { getAllByTestId } = render(
    <CommentBlock data={data} />
  );

  expect(getAllByTestId('comment')).toHaveLength(data.edge_media_to_comment.edges.length + 1);
})
