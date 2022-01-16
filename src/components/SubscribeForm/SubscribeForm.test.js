import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SubscribeForm from './SubscribeForm';
import renderer from 'react-test-renderer';

it("The subscribe button is disabled before typing anything in the input text box", () => {
  render(<SubscribeForm />);

  expect(screen.getByRole("button", { name: /subscribe/i })).toBeDisabled();
});

it("The subscribe button becomes enabled when we start typing in the input text box", () => {
  render(<SubscribeForm />);

  userEvent.type(screen.getByRole("textbox", { name: /email/i }), "abc@email.com");

  expect(screen.getByRole("button", { name: /subscribe/i })).toBeEnabled();
});

it("Test to match snapshot of component", () => {
  const subscribeFormTree = renderer.create(<SubscribeForm />).toJSON();
  expect(subscribeFormTree).toMatchSnapshot();
})
