import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from './index';
import axios from 'axios';

// Mock pour axios
jest.mock('axios');

describe('LoginForm', () => {
    it('renders login button', () => {
        render(<LoginForm />);
        const loginButton = screen.getByRole('button', { name: /connexion avec facebook/i });
        expect(loginButton).toContain('Connexion avec Facebook');
      });
  it('displays loading message when login button is clicked', async () => {
    render(<LoginForm />);
    const loginButton = screen.getByRole('button', { name: /connexion avec facebook/i });

    fireEvent.click(loginButton);

    const loadingMessage = screen.getByText(/chargement.../i);
    expect(loadingMessage).toContain('chargement...');

    // Attendre que le chargement soit terminé
    await waitFor(() => {});
  });

  it('calls backend and redirects to profile page when login succeeds', async () => {
    // Mock pour axios.get
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
      data: {
        reactionsSummary: {},
        feedback: {},
        emotionsSummary: {}
      }
    });

    render(<LoginForm />);
    const loginButton = screen.getByRole('button', { name: /connexion avec facebook/i });

    fireEvent.click(loginButton);

    // Attendre que la redirection soit effectuée
    await waitFor(() => {
      expect(window.location.pathname).toEqual('/profile');
    });

    // Vérifier si la requête vers le backend a été effectuée avec les bons paramètres
    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('feed-back'), {
      params: {
        userId: expect.any(String),
        accessToken: expect.any(String),
        limit: '30'
      }
    });
  });

  it('displays login error message when login fails', async () => {
    // Mock pour axios.get pour simuler une erreur
    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValueOnce(new Error('Login failed'));

    render(<LoginForm />);
    const loginButton = screen.getByRole('button', { name: /connexion avec facebook/i });

    fireEvent.click(loginButton);

    // Attendre que le message d'erreur soit affiché
    const errorMessage = await screen.findByText(/une erreur s'est produite lors de la connexion/i);
    expect(errorMessage).toContain('une erreur s\'est produite lors de la connexion');
  });
});
