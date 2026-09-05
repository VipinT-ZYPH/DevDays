/**
 * Tests the publisher filter interactions in the games catalogue.
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('filters visible games when a publisher is selected', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.selectOptions(screen.getByLabelText('Publisher'), '1');

    expect(screen.getByText('Skybound')).toBeInTheDocument();
    expect(screen.getByText('Moonlit Vale')).toBeInTheDocument();
    expect(screen.queryByText('Circuit Breakers')).not.toBeInTheDocument();
  });
});
