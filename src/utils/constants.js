const pichauFn = require('../stores/pichau');
const kabumFn = require('../stores/kabum');
const terabyteFn = require('../stores/terabyte');

module.exports.messages = {
  IN_STOCK_MESSAGE: 'IN STOCK',
  OUT_OF_STOCK_MESSAGE: 'OUT OF STOCK',
  ERROR: 'ERROR - STATUS 503'
};

module.exports.supportedStores = {
  pichau: pichauFn,
  kabum: kabumFn,
  terabyteshop: terabyteFn
};