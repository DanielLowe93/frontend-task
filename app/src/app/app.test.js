import React from 'react'
import { render } from '@testing-library/react'
import data from '../data.json'
import App from './index.js'

it('renders without crashing', () => {
  const { getByTestId } = render(
    <App data={data} />
  )

  expect(getByTestId('app-main')).toBeTruthy()
})
