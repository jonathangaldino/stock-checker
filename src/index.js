// const puppeteer = require('puppeteer');
const puppeteer = require('puppeteer-extra');
const pluginStealth = require('puppeteer-extra-plugin-stealth');

const logger = require('./utils/logger');
const scrape = require('./scrape');

puppeteer.use(pluginStealth());

const main = async () => {
  const products = require('./data/products.json');

  logger.debug('Opening puppeteer browser...');
  const browser = await puppeteer.launch({ headless: true });

  await scrape({ browser, productList: products, logger });

  logger.debug('Closing puppeteer browser...');
  browser.close();
};

main();
