import React from 'react'
import { render } from '@testing-library/react'
import Comment from './index.js'

it('should display the users name and comment and a likeButton', () => {
  const user = 'Dave'
  const comment = 'Hello World'

  const { getByText, getByTestId } = render(
    <Comment user={user} comment={comment} />
  )

  expect(getByText(user)).toBeTruthy()
  expect(getByText(comment)).toBeTruthy()
  expect(getByTestId('like-button')).toBeTruthy()
})

it('should not display the like button if the removeLikeButton prop is true', () => {
  const user = 'Dave'
  const comment = 'Hello World'

  const { queryByTestId } = render(
    <Comment user={user} comment={comment} removeLikeButton />
  )

  expect(queryByTestId('like-button')).toBeNull()
})
