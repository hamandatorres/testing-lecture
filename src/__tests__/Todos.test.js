import React from 'react'
import { render, act } from '@testing-library/react'
import axios from 'axios'
import Todos from '../Components/Todos'

it('Renders todos', async () => {
    let component;
  
    // React Testing works with other testing libraries
    // This is us using Jest with React Testing
    // jest is a global object that is automatically in scope with every test file created

    // We implement mockImplementation in order to utilize axios
    // More on mock functions at https://jestjs.io/docs/en/mock-function-api.html
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