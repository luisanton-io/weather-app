import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('checks weather logo', () => {
  render(<App />);
  const weatherLogo = screen.getByAltText("weather-logo");
  expect(weatherLogo).toBeInTheDocument();
});
