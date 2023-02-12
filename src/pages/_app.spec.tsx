import { render } from '@testing-library/react';
import App from '.';

const sut = () => render(<App />);

describe('<App />', () => {
  it('should render page App', () => {
    const { getByText } = sut();
    const title = getByText(/Boilerplate/i);
    expect(title).toBeInTheDocument();
  });
});
