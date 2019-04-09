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

const { getByText } = render(<App/>);

// it('otherwise strikes get added up until 3', () => {


//   const button = getByText('Strike');

//   fireEvent.click(button);
//   fireEvent.click(button);
  
//   getByText(`Strikes: ${2}`);

// });

// it('adding 3 strikes sets strikes to 0', () => {

//   const button = getByText('Strike');

//   fireEvent.click(button);
//   fireEvent.click(button);
//   fireEvent.click(button);

//   getByText(`Strikes: ${0}`)

// });



it('Adding a 4th ball sets it to 0', () => {

  const ball = getByText('Ball');

  fireEvent.click(ball);
  fireEvent.click(ball);
  fireEvent.click(ball);
  fireEvent.click(ball);
  
  getByText(`Balls: ${0}`)

})

// it('Balls add till 3', () => {

//   const ball = getByText('Ball');

//   fireEvent.click(ball);
//   fireEvent.click(ball);
//   fireEvent.click(ball);
  
//   getByText(`Balls: ${3}`)

// })

it('fouls add up to 2 strikes', () => {

  const button  = getByText('Foul');

  fireEvent.click(button);
  fireEvent.click(button);
  // fireEvent.click(button);
  
  getByText(`Strikes: ${2}`)

})
