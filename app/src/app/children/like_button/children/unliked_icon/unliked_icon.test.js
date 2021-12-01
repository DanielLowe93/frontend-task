import React from 'react'
import { render } from '@testing-library/react'
import UnlikedIcon from './index.js'

it('should display a unliked icon with the default height of 24', () => {
  const { getByTestId } = render(
    <UnlikedIcon
      height={null}
    />
  )

  expect(getByTestId('unliked-icon')).toBeTruthy()
  expect(getByTestId('unliked-icon').getAttribute('height')).toBe('24')
})

it('should display a unliked icon with the passed height', () => {
  const height = '12'
  const { getByTestId } = render(
    <UnlikedIcon
      height={height}
    />
  )

  expect(getByTestId('unliked-icon').getAttribute('height')).toBe(height)
})
