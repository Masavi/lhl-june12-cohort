import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import Result from '../Result';

// Import the library that is going to be mocked
import axios from 'axios';

// Tell jest to mock the library
jest.mock('axios');

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };

  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});

const fakeData = [
  {
    "id": 1,
    "name": "Person 1",
    "points": 36
  },
  {
    "id": 2,
    "name": "Person 2",
    "points": 29
  },
  {
    "id": 3,
    "name": "Person 3",
    "points": 22
  },
  {
    "id": 4,
    "name": "Person 4",
    "points": 17
  },
  {
    "id": 5,
    "name": "Person 5",
    "points": 13
  }
]

test('can display results from an API call', () => {
  // 1) Tell jest how to handle the axios GET request
  axios.get.mockResolvedValue({ data: fakeData });

  // 2) Render the component
  const { getByTestId, findByText } = render(<Result status="Waiting" />);

  // 3) Find the "high scores" button
  const highScoresBtn = getByTestId('high-scores');

  // 4) Click on the "high scores" button
  fireEvent.click(highScoresBtn);

  // 5) Check if the fake data has been loaded
  return findByText('Person 3', { exact: false });
})