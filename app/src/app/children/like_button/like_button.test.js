import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import LikeButton from './index.js'

it('should display unliked icon by default', () => {
  const { getByTestId } = render(
    <LikeButton
      height={null}
      likeCount={null}
      setLikeCount={jest.fn()}
    />
  )

  expect(getByTestId('unliked-icon')).toBeTruthy()
})

it('should display liked icon when button is clicked', () => {
  const { getByTestId } = render(
    <LikeButton
      height={null}
      likeCount={null}
      setLikeCount={jest.fn()}
    />
  )

  const likeButton = getByTestId('like-button')
  fireEvent.click(likeButton)
  expect(getByTestId('liked-icon')).toBeTruthy()
})

it('should fire setLikeCount state func with likeCount + 1 when button is clicked', () => {
  const mockStateFunction = jest.fn()
  const { getByTestId } = render(
    <LikeButton
      height={null}
      likeCount={40}
      setLikeCount={mockStateFunction}
    />
  )

  const likeButton = getByTestId('like-button')
  fireEvent.click(likeButton)
  expect(mockStateFunction).toHaveBeenCalledWith(41)
})

it('should revert back to unlike icon when clicked twice', () => {
  const mockStateFunction = jest.fn()
  const { getByTestId } = render(
    <LikeButton
      height={null}
      likeCount={40}
      setLikeCount={mockStateFunction}
    />
  )

  const likeButton = getByTestId('like-button')
  fireEvent.click(likeButton)
  fireEvent.click(likeButton)

  expect(getByTestId('unliked-icon')).toBeTruthy()
})
