import React from 'react'
import { render } from '@testing-library/react'
import data from '../../../data.json'
import UserBlock from './index.js'

it('should display the users image', () => {
  const { getByTestId } = render(
    <UserBlock
      owner={data.owner}
      location={data.location}
    />
  )

  expect(getByTestId('users-image')).toBeTruthy()
})

it('should display the username and location of the image', () => {
  const { getByText } = render(
    <UserBlock
      owner={data.owner}
      location={data.location}
    />
  )

  expect(getByText(data.owner.username)).toBeTruthy()
  expect(getByText(data.location.name)).toBeTruthy()
})
