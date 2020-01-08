import React from 'react'
import { render, act } from '@testing-library/react'
import axios from 'axios'
import Todos from '../Components/Todos'

it('Renders todos', async () => {
  let component

  jest.spyOn(axios, 'get').mockImplementation(() =>
    Promise.resolve({
      data: [{ id: 1, title: 'test title' }],
    })
  )

  await act(async () => {
    const { container } = render(<Todos />)
    component = container
  })

  console.log(component.textContent)

  expect(component.textContent).toContain('test title')
})
