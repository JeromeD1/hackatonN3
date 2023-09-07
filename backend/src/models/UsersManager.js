const AbstractManager = require("./AbstractManager")

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" })
  }

  insert(users) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, emails, phone, coordXusers, coordYusers) values (?, ?, ?, ?, ?, ?)`,
      [
        users.firstname,
        users.lastname,
        users.emails,
        users.phone,
        users.coordXusers,
        users.coordYusers,
      ]
    )
  }

  update(users) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, emails = ?, phone = ?, coordXusers = ?, coordYusers= ? where id = ?`,
      [
        users.firstname,
        users.lastname,
        users.emails,
        users.phone,
        users.coordXusers,
        users.coordYusers,
      ]
    )
  }
}

module.exports = UsersManager
