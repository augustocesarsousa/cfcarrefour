import { render, screen } from '@testing-library/react';
import BaseButton from '..';

test('BaseButton should render button with given text', () => {
  const text = 'Buscar';

  render(<BaseButton text={text} />);

  expect(screen.getByText(text)).toBeInTheDocument();
});
