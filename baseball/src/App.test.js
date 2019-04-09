import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('otherwise strikes get added up until 3', () => {

  const { getByText } = render(<App/>);

  const button = getByText('Strike');

  fireEvent.click(button);
  fireEvent.click(button);
  
  getByText(`Strikes: ${2}`);

});

// it('adding 3 strikes sets strikes to 0', () => {
  
//   const { getByText } = render(<App/>);

//   const button = getByText('Strike');

//   fireEvent.click(button);
//   fireEvent.click(button);
//   fireEvent.click(button);

//   getByText(`Strikes: ${0}`)

// });



// it('Balls add till 3', () => {

//   const { getByText } = render(<App/>);

//   const button = getByText('Ball');

//   fireEvent.click(button);
//   fireEvent.click(button);
  
//   getByText(/balls: 0/i)

// })
