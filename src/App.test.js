import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn Docker/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link 2', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn Docker/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link 3', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn Docker/i);
  expect(linkElement).toBeInTheDocument();
});