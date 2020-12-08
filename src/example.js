const puppeteer = require('puppeteer');
const pichau = require('./stores/pichau');
const logger = require('./utils/logger');
const { messages } = require('./utils/constants');

const main = async () => {
  // const product = {
  //   name: 'Asus RTX 3080 TUF Gaming',
  //   url: 'https://www.pichau.com.br/hardware/placa-de-video/placa-de-video-asus-geforce-rtx-3080-tuf-gaming-10gb-gddr6x-320-bit-tuf-rtx3080-10g-gaming',
  // }
  const product = {
    name: 'ASRock RX 5700 XT 8gb',
    url: 'https://www.pichau.com.br/hardware/placa-de-video/placa-de-video-asrock-radeon-rx-5700-xt-8gb-phantom-gaming-d-oc-edition-256-bit-90-ga1jzz-00uanf'
  }

  logger.debug('Opening puppeteer browser...')
  const browser = await puppeteer.launch();

  await pichau({ 
    browser, 
    logger, messages, 
    productName: product.name, 
    productURL: product.url 
  })

  logger.debug('Closing puppeteer browser...')
  browser.close();
}


main();