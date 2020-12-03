
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  const linkElement = screen.getByText(/Enter your github username or ID/i);
  expect(linkElement).toBeInTheDocument();
});
