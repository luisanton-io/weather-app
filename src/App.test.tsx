import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import VideoBackground from './components/VideoBackground';

test('checks weather logo', () => {
  render(<App />);
  const weatherLogo = screen.getByAltText("weather-logo");
  expect(weatherLogo).toBeInTheDocument();
});


test('checks if a button gets clicked', () => {
  const fx = jest.fn()

  const doc = render(<button id="my-button" onClick={() => fx()}></button>)

  const button = doc.container.querySelector("#my-button")
  expect(button).not.toBeNull()
  fireEvent.click(button!)
  expect(fx).toBeCalled()
})


test('checks if a video exists in the App', () => {
  const doc = render(<App />)

  const video = doc.container.querySelector('video')
  expect(video).toBeInTheDocument()
})