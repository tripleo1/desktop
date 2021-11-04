module.exports = {
  roots: ['<rootDir>/src/', '<rootDir>/test/'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/integration/**/*-test.ts{,x}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/test/setup-test-framework.ts'],
  reporters: ['default', '<rootDir>../script/jest-actions-reporter.js'],
  globals: {
    'ts-jest': {
      useBabelConfig: true,
    },
  },
}
