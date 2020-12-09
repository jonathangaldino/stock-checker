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
      name: 'MSI RTX 3080 Ventus 3X',
      url: 'https://www.pichau.com.br/hardware/placa-de-video/placa-de-video-msi-geforce-rtx-3080-ventus-3x-10gb-gddr6x-320-bit-rtx-3080-ventus-3x-10g'
    },
    {
      name: 'MSI RTX 3080 Ventus 3X OC',
      url: 'https://www.pichau.com.br/hardware/placa-de-video/placa-de-video-msi-geforce-rtx-3080-ventus-3x-10gb-oc-gddr6x-320-bit-rtx-3080-ventus-3x-10g-oc'
    },
    {
      name: 'MSI RTX 3080 Gaming X Trio',
      url: 'https://www.pichau.com.br/hardware/placa-de-video/placa-de-video-msi-geforce-rtx-3080-gaming-x-trio-10gb-gddr6x-320-bit-rtx-3080-gaming-x-trio-10g'
    },
    {
      name: 'Zotac RTX 3080 TRINITY',
      url: 'https://www.pichau.com.br/hardware/placa-de-video/placa-de-video-zotac-geforce-rtx-3080-trinity-10gb-320-bit-zt-a30800d-10p'
    },
    {
      name: 'Asus RTX 3080',
      url: 'https://www.kabum.com.br/produto/121138/placa-de-v-deo-asus-nvidia-geforce-rtx3080-10gb-gddr6-tuf-rtx3080-10g-gaming'
    },
    {
      name: 'Asus RTX 3080 Rog Strix',
      url: 'https://www.kabum.com.br/produto/128025/placa-de-v-deo-asus-nvidia-geforce-rtx-3080-10gb-gddr6x-rog-strix-rtx3080-o10g-gaming'
    },
    {
      name: 'MSI RTX 3080 Ventus 3X',
      url: 'https://www.kabum.com.br/produto/127410/placa-de-v-deo-msi-nvidia-geforce-rtx-3080-ventus-3x-10g-oc-gddr6x'
    },
    {
      name: 'EVGA RTX 3080 10G-P5-3883-KR',
      url: 'https://www.kabum.com.br/produto/128051/placa-de-v-deo-evga-nvidia-geforce-rtx-3080-10gb-gddr6x-10g-p5-3883-kr'
    },
    {
      name: 'Gigabyte RTX 3080 EAGLEOC-10GD',
      url: 'https://www.kabum.com.br/produto/128078/placa-de-v-deo-gigabyte-nvidia-geforce-rtx-3080-10gb-gddr6x-gv-n3080eagle-oc-10gd'
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


module.exports = main;