// @ts-check
import { test, expect } from '@playwright/test';

test('check get endpoint', async ({ page }) => {

  /**
   * @type {string[]}
   */
  const warnings = [];

  page.on('console', msg => {

    if (msg.type() === 'warning') {
      warnings.push(msg.text());

    }

  });

  
  await page.goto('https://forum.robotframework.org/');

  expect(await page.title()).toBe('Robot Framework - Robot Framework Community');


  const warningMessages = warnings.find(msg => msg.includes('DEPRECATION'));
  expect(warningMessages).toBeTruthy();



});

