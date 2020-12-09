const randomUseragent = require('random-useragent');

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

  log.debug('Getting a random user-agent');
  const userAgent = await randomUseragent.getRandom();
  
  log.debug(`Setting user-agent to ${userAgent}`);
  await page.setUserAgent(userAgent);
  
  try {
    log.debug(`Going to ${productURL}`);
    await page.goto(productURL);

    const stockStatus = await page.evaluate(() => {
      return document.querySelectorAll('div#indisponivel').length <= 0;
    })

    log.info(stockStatus ? messages.IN_STOCK_MESSAGE: messages.OUT_OF_STOCK_MESSAGE);
    return stockStatus;
  } catch (err) {
    log.error(`Request Failed - `, err)
  } finally {
    log.debug('Closing the page...');
    await page.close();
  }
}