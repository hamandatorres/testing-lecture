// Start by importing react and Header

import React from 'react'
// import the next when needed
import { render, fireEvent } from '@testing-library/react'
import Header from '../Components/Header'


// Let's write our first test
it('Does not show dropdown when mounted', () => {
  // We can grab elements from the DOM using methods similarly to how we do w/ vanilla JS
    // RTL has its own methods though, don't use vanilla methods
  // A reference of methods we can use: https://testing-library.com/docs/dom-testing-library/cheatsheet
  // We'll get our first item using queryByTestId

  // We will destructure queryByTestId from render and point it at our Header component using the render method from the testing library
  // import above.
  const { queryByTestId } = render(<Header />)

  // Now we want to grab our dropdown
  const dropdown = queryByTestId('dropdown')

  // React Testing can work with other testing libraries
    // For example, Jest
  expect(dropdown).toBeFalsy()
})

// Let's create another test
it('Shows dropdown when hamburger is clicked', () => {
 
  // We'll use something called container
    // See https://testing-library.com/docs/react-testing-library/api#container
      // For our purposes, we will create a container and step into it in a bit to see if we get some expected content
  const { container, getByTestId } = render(<Header />)

   // This time instead of using queryByTestId, let's use getByTestId
    // queryByTestId and getByTestId are very similar. 
      // The difference between the two is that getByTestId will throw an error when it can't find the element and queryByTestId will return null 
        // (destructure from render above)
  const hamburger = getByTestId('hamburger-button')

  // Next, we'll simulate a user click
  // We do this with the fireEvent method (destructure at top)
    // See https://testing-library.com/docs/dom-testing-library/api-events#fireeventeventname
  fireEvent.click(hamburger)

  expect(container.textContent).toContain('Dropdown menu')
})
