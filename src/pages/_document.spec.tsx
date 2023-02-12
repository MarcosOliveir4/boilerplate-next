import { render } from '@testing-library/react';
import MyDocument from '.';

describe('<MyDocument />', () => {
  it('renders the document correctly', () => {
    const { container } = render(<MyDocument />);
    expect(container).toBeTruthy();
  });
});
