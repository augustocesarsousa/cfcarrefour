import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Home from '..';

describe('Home tests', () => {
  test('should render page', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText('Compra Fácil Carrefour')).toBeInTheDocument();
    expect(screen.getByTestId('home-subtitle-content')).toBeInTheDocument();
    expect(screen.getByTestId('input-cep')).toBeInTheDocument();
    expect(screen.getByTestId('button-submit')).toBeInTheDocument();
  });

  test('should show validation message when just clicking submit', async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const submitButton = screen.getByTestId('button-submit');

    userEvent.click(submitButton);

    await waitFor(() => {
      const message = screen.getByText('Informe um CEP para efetuar a busca');
      expect(message).toBeInTheDocument();
    });
  });

  test('should show validation message when given invalid CEP', async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const cep = '07914';
    const inputCEP = screen.getByTestId('input-cep');
    const submitButton = screen.getByTestId('button-submit');

    userEvent.type(inputCEP, cep);
    userEvent.click(submitButton);

    await waitFor(() => {
      const message = screen.getByText('CEP inválido');
      expect(message).toBeInTheDocument();
    });
  });
});
