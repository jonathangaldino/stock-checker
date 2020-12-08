const url = require('url');
const { supportedStores, messages } = require('./utils/constants');

const parseUrl = url.parse;
const stores = Object.keys(supportedStores);

module.exports = async ({ browser, productList, logger }) => {
  for (const product of productList) {
    const _url = parseUrl(product.url);
    const storeName = _url.hostname.split('.')[1];

    if (!stores.includes(storeName.toLowerCase())) {
      throw new Error('Store not supported yet')
    }

    const fetchFn = supportedStores[storeName];
    
    await fetchFn({ 
      browser, 
      logger, 
      productURL: product.url, 
      productName: product.name, 
      messages
    })
  }
}