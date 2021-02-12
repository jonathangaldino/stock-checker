module.exports = async ({
  browser,
  logger,
  productURL,
  productName: product,
  messages,
}) => {
  const log = logger.createContextLogger({
    store: 'Amazon',
    product,
  });

  log.debug('Creating new page...');
  const page = await browser.newPage();

  try {
    log.debug(`Going to ${productURL}`);
    await page.goto(productURL);

    const stockStatus = await page.evaluate(() => {
      return ['priceblock_ourprice', 'unqualified-buybox-olp'].some(
        (el) => document.querySelectorAll(`#${el}`).length > 0
      );
    });

    log.info(
      stockStatus ? messages.IN_STOCK_MESSAGE : messages.OUT_OF_STOCK_MESSAGE
    );
    return stockStatus;
  } catch (err) {
    log.error(`Request failed =(`);
  }
};
