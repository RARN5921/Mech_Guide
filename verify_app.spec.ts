import { test, expect } from '@playwright/test';

test('verify application load and navigation', async ({ page }) => {
  // Increase timeout for slow dev server
  test.setTimeout(60000);

  await page.goto('http://localhost:5173');

  // Wait for the app to render - check for the title "MECH-GUIDE"
  await expect(page.locator('h1')).toContainText('MECH-GUIDE');

  // Take a screenshot of the dashboard
  await page.screenshot({ path: 'verification/dashboard_fixed.png' });

  // Click on "Selection Engine" in the sidebar
  await page.click('text=Selection Engine');
  await expect(page.url()).toContain('/selection');
  await page.screenshot({ path: 'verification/selection_fixed.png' });

  // Click on "CAD Library"
  await page.click('text=CAD Library');
  await expect(page.url()).toContain('/cad');
  // Wait a bit for Three.js to potentially render something
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'verification/cad_fixed.png' });
});
