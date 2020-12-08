const puppeteer = require('puppeteer');
const logger = require('./utils/logger');
const scrape = require('./scrape');

const main = async () => {
  const products = [
    {
      name: 'Asus RTX 3080 TUF Gaming',
      url: 'https://www.pichau.com.br/hardware/placa-de-video/placa-de-video-asus-geforce-rtx-3080-tuf-gaming-10gb-gddr6x-320-bit-tuf-rtx3080-10g-gaming',
    },
    {
      name: 'Gigabyte RTX 3080 OC',
      url: 'https://www.pichau.com.br/hardware/placa-de-video/placa-de-video-gigabyte-geforce-rtx-3080-gaming-oc-10gb-gddr6x-320-bit-gv-n3080gaming-oc-10gd'
    },
    {
      name: 'Asus RTX 3080',
      url: 'https://www.kabum.com.br/produto/121138/placa-de-v-deo-asus-nvidia-geforce-rtx3080-10gb-gddr6-tuf-rtx3080-10g-gaming'
    },
    {
      name: 'AMD Radeon RX 550 Pulse 4G',
      url: 'https://www.kabum.com.br/produto/89279/placa-de-v-deo-sapphire-amd-radeon-rx-550-pulse-4g-gddr5-11268-01-20g'
    }
  ]

  logger.debug('Opening puppeteer browser...')
  const browser = await puppeteer.launch();

  await scrape({ browser, productList: products, logger });

  logger.debug('Closing puppeteer browser...')
  browser.close();
}


main();