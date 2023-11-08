require("dotenv").config();

const dev = {
  app: {
    port: process.env.Port || 5000,
  },
  db: {
    url: process.env.DB_URL,
  },
};

module.exports = dev;
