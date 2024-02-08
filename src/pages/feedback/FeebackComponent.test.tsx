import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import FeedbackComponent from './index';
import '@testing-library/jest-dom/extend-expect';

const mockData = {
  feedback: 'Mocked feedback',
  totalScore: 10,
};

jest.mock('node-fetch', () =>
  jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
      ok: true,
    })
  )
);

describe('FeedbackComponent', () => {
  it('renders feedback component with initial data', async () => {
    render(<FeedbackComponent />);
    await waitFor(() => {
      expect(screen.getByText('Mocked feedback')).toContain('Mocked feedback');
      expect(screen.getByText('Total de score : 10')).toContain('Total de score : 10');
    });
  });
});
