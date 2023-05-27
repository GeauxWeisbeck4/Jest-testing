// @ts-check
import '@testing-library/jest-dom/extend-expect';

import fs from 'fs';
import querySelector from '@github/query-selector';

const { query, querySelectorAll } = querySelector;

beforeAll(async () => {
  const htmlData = await fs.promises.readFile('index.html');
  document.documentElement.innerHTML = htmlData.toString();
});

test('The document contains two paragraphs with text', () => {
  const paragraphs = querySelectorAll(document, 'p');
  expect(paragraphs.length).toBe(2);

  paragraphs.forEach((paragraph) => {
    expect(paragraph).not.toHaveTextContent('');
  });
});

test('The document contains two elements in list', () => {
  const listElements = querySelectorAll(document, 'ul li');
  expect(listElements.length).toBe(2);
});

test('First element in list must be link', () => {
  const firstElement = query(document, 'ul li:nth-child(1)');
  const link = query(firstElement, 'a');

  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href');
});
