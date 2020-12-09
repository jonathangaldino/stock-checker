const cron = require('node-cron');
const main = require('./index');

cron.schedule('*/5 * * * *', async () => {// every 5 minutes
  await main();
})