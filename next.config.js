const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
});

module.exports = {
  publicRuntimeConfig: {
    API_DEVELOPMENT: 'http://localhost:8000/api',
    API_PRODUCTION: 'https://lifeasier.com/api',
    PRODUCTION: true,
    APP_NAME: 'LIFEASIER',
    DOMAIN_PRODUCTION: 'https://lifeasier.com',
    DOMAIN_DEVELOPMENT: 'http://localhost:3000',
  },
};
