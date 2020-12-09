module.exports = async ({
  browser, 
  logger,
  productURL,
  productName,
  messages
}) => {
  const log = logger.createContextLogger({ store: 'TerabyteShop', product: productName });
  
  log.debug('Creating new page...');
  const page = await browser.newPage();

  try {
    log.debug(`Going to ${productURL}`);
    await page.goto(productURL);

    await page.screenshot({path: 'screenshot.png'});


    const stockStatus = await page.evaluate(() => {

    return document.querySelectorAll('div#indisponivel').length > 0;
  })

    log.info(stockStatus ? messages.IN_STOCK_MESSAGE : messages.OUT_OF_STOCK_MESSAGE);
    return stockStatus;
  } catch (err) {
    log.error(`Request failed =(`)
  }
}