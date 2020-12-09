const { launcher, cronLauncher } = require('./launcher');

(async () => {
  let startWithCronjob = false;

  process.argv.forEach((val, index) => {
    if (val === '--cron') {
      startWithCronjob = true;
    }
  });

  if (startWithCronjob) {
    const job = cronLauncher();
    await job.start();
  } else {
    await launcher();
  }
})()