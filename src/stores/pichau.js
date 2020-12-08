module.exports = async ({
  browser, 
  logger,
  productURL,
  productName,
  messages
}) => {
  const log = logger.createContextLogger({ store: 'Pichau', product: productName });
  
  log.debug('Creating new page...');
  const page = await browser.newPage();

  log.debug(`Going to ${productURL}`);
  await page.goto(productURL);

  const stockStatus = await page.evaluate(() => {
    const nodes = [];

    document.querySelectorAll('div.product-info-main > button.button-action-to-cart')
      .forEach(btn => {
        if (btn.getAttribute('id') === 'buttonAddToCartTrigger' && !btn.disabled) {
          nodes.push(btn);
        }
      })
    
    return nodes.length > 0;
  })

  log.info(stockStatus ? messages.IN_STOCK_MESSAGE : messages.OUT_OF_STOCK_MESSAGE);
  return stockStatus;
}