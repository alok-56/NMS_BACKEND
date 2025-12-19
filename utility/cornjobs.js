const cron = require("node-cron");
const AGENT_ID = "1f79292e-7e1e-44ae-8550-fbc4d92f3b0e";

// after avery 10 min montoring
function startCronJobs() {
  cron.schedule("*/5 * * * * *", () => {});
}

// after every 15 min topology data

module.exports = { startCronJobs };
