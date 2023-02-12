import { render } from '@testing-library/react';
import Home from '.';

const sut = () => render(<Home />);

describe('<Home />', () => {
  it('should render page home', () => {
    const { container } = sut();
    expect(container).toBeInTheDocument();
  });
});
