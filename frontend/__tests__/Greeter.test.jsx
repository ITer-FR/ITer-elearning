import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Greeter } from '../components/Greeter';

describe('Greeter', () => {
  it('greets the given name', () => {
    render(<Greeter name="ITers" />);

    expect(screen.getByRole('heading')).toHaveTextContent('Hello ITers');
  });
});
