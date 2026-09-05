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

  it('persists the high-contrast preference across remounts', async () => {
    const user = userEvent.setup();
    const { unmount } = render(<App />);

    await user.click(screen.getByRole('button', { name: 'Use high contrast' }));
    expect(document.documentElement).toHaveClass('high-contrast');
    expect(window.localStorage.getItem('devdays-high-contrast')).toBe('true');

    unmount();
    render(<App />);

    expect(screen.getByRole('button', { name: 'Use standard contrast' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
  });
});
