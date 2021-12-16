// https://jestjs.io/docs/configuration
 
export default {
  bail: true, //Bail irá interromper os testes logo na primeira falha
  clearMocks: true, //Limpa Mocks e Instancias a cada teste
  coverageProvider: "v8",
  testMatch: [
    "**/__test__/**/*.test.js?(x)" //Busca por arquivos na pasta test que terminam em .test.js
  ],
  transform: {
    "\\.m?jsx?$": "jest-esm-transformer"
  },
};
