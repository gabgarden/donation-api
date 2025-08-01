/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  rootDir: './',
  roots: ['<rootDir>/src', '<rootDir>/src/__tests__'],
  watchman: true,
};

export default config;
