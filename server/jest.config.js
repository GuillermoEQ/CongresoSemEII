module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [
    '<rootDir>/src/test' // Agregar la carpeta 'test' como una raíz adicional
  ],
  testMatch: [
    '**/*.test.ts' // Buscar archivos de prueba con cualquier nombre que terminen en '.test.ts'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};
