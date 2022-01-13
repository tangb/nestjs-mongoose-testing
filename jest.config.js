module.exports = {
  transform: { '^.+\\.ts$': 'ts-jest' },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts)$',
  modulePaths: ['<rootDir>'],
  modulePathIgnorePatterns: ['<rootDir>/dist'],
  coveragePathIgnorePatterns: ['/fixtures/', '/node_modules/'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  testEnvironment: 'node',
  globals: { 'ts-jest': { tsconfig: 'tsconfig.json' } },
  coverageReporters: ['html', 'lcov', 'text'],
};
