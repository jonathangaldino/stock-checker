// const puppeteer = require('puppeteer');
const puppeteer = require('puppeteer-extra');
const pluginStealth = require('puppeteer-extra-plugin-stealth');

const logger = require('./utils/logger');
const scrape = require('./scrape');

puppeteer.use(pluginStealth())

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
      name: 'MSI GT 710 2gb',
      url: 'https://www.terabyteshop.com.br/produto/15568/placa-de-video-msi-geforce-gt-710-2gd3-lp-2gb-gddr3-64-bit-912-v809-2024'
    },
    {
      name: 'Asus RTX 3080 TUF',
      url: 'https://www.terabyteshop.com.br/produto/15107/placa-de-video-asus-tuf-geforce-rtx-3080-10gb-gddr6x-320bit-tuf-rtx3080-10g-gaming'
    }
  ]

  logger.debug('Opening puppeteer browser...')
  const browser = await puppeteer.launch({ headless: true });

  await scrape({ browser, productList: products, logger });

  logger.debug('Closing puppeteer browser...')
  browser.close();
}


main();