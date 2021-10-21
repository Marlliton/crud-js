const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

module.exports = () => {
  return open({
    filename: __dirname + "/register.db",
    driver: sqlite3.Database
  })
}