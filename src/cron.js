const cron = require('node-cron');
const main = require('./index');

cron.schedule('* * * * *', async () => {// every 5 minutes
  await main();
})