const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { compilerOptions } = require('./tsconfig.paths');

module.exports = {
  bail: true,
  browser: false,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,js}',
    '!<rootDir>/src/server.ts',
  ],
  coverageDirectory: '<rootDir>/__tests__/coverage',
  coverageReporters: ['json', 'lcov'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/__tests__/**/*.(spec|test).{js,ts}'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
};
