import React from 'react'
import { render, act } from '@testing-library/react'
import axios from 'axios'
import Todos from '../Components/Todos'

// Have React Testing Library open during testing: https://testing-library.com/docs/intro

it('Renders todos', async () => {
  let component;

  jest.spyOn(axios, 'get').mockImplementation(() =>
    Promise.resolve({
      data: [{ id: 1, title: 'test title' }],
    })
  )

  await act(async () => {
    const { container } = render(<Todos />)
    component = container;
    //Grabs the dom container from the Todos component and reassigns it to the component variable
  })

  expect(component.textContent).toContain('test title')
})
