const Database = require("../db/config.js");

module.exports = {
  async home(req, res) {
    const db = await Database();
    const users = await db.all("SELECT * FROM user");
    users.reverse()

    res.render("index", { users });
  },

  async register(req, res) {
    const name = req.body.user;
    const phone = req.body.tel;
    const email = req.body.email;

    const db = await Database();
    await db.run(
      "INSERT INTO user(name, phone, email) VALUES(:name, :phone, :email)",
      {
        ":name": `${name}`,
        ":phone": `${phone}`,
        ":email": `${email}`,
      }
    );

    await db.close();

    res.redirect("/");
  },

  action(req, res) {
    const action = req.params.action;
    const userId = req.params.userid;
    const name = req.body.user;
    const phone = req.body.tel;
    const email = req.body.email;

    handleAction(action, userId, name, phone, email);
    res.redirect("/");
  },
};

async function handleAction(action, userId, name = "", phone = "", email = "") {
  const db = await Database();
  if (action === "delete") {
    await db.run(`DELETE FROM user WHERE id = ${userId}`);
  } else {
    await db.run(
      `UPDATE user SET name='${name}', phone='${phone}', email='${email}' WHERE id=${userId}`
    );
  }
}
