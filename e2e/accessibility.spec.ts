/**
 * Verifies the high-contrast accessibility preference in a real browser.
 */
import { expect, test } from '@playwright/test';

test('persists high-contrast mode across page reloads', async ({ page }) => {
  await page.goto('/');

  const toggle = page.getByRole('button', { name: 'Use high contrast' });
  await expect(toggle).toHaveAttribute('aria-pressed', 'false');

  await toggle.click();
  await expect(page.locator('html')).toHaveClass(/high-contrast/);
  await expect(page.getByRole('button', { name: 'Use standard contrast' })).toHaveAttribute(
    'aria-pressed',
    'true',
  );

  await page.reload();

  await expect(page.locator('html')).toHaveClass(/high-contrast/);
  await expect(page.getByRole('button', { name: 'Use standard contrast' })).toHaveAttribute(
    'aria-pressed',
    'true',
  );
});
