import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('renders text in h1', () => {
  const { getByText } = render(<App />);
  const h1Text = getByText(/hello this is the start/i);
  expect(h1Text).toBeInTheDocument();
});
