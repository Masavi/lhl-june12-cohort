import React from 'react';
import { render, prettyDOM, fireEvent } from '@testing-library/react';
import Game from '../Game';

test('can toggle the cheating mode by clicking on the robot head', () => {
  // 1) Render the component
  const { container, debug, getByTestId } = render(<Game />);

  /*
    Options to display the DOM Tree in console
  */
  // debug();
  // prettyDOM(container);

  // 2) Find the robot head icon within the component;
  const robotHeadIcon = getByTestId('robot-head');

  // 3) Click on the robot head icon
  fireEvent.click(robotHeadIcon);

  // 4) Check if the robot head has the class "cheating"
  expect(robotHeadIcon).toHaveClass('cheating');

  // 5) Click on the robot head icon
  fireEvent.click(robotHeadIcon);

  // 6) Check that the robot head does not have the class "cheating";
  expect(robotHeadIcon).not.toHaveClass('cheating');
})