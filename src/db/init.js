const Database = require("./config.js");

const initDb = {
  async init() {
    const db = await Database();

    await db.exec(
      `CREATE TABLE user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        phone TEXT,
        email TEXT
      )`
    );

    await db.close();
  },
};

initDb.init();
