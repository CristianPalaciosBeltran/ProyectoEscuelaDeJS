require("dotenv").config();

const config = {
  dev: process.env.NODE !== "production",
  port: process.env.PORT || 3000,
  cors: process.env.CORS,
  dbUser: process.env.DB_USERS,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME
};

module.exports = { config };
