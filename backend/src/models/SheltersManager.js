const AbstractManager = require("./AbstractManager")

class SheltersManager extends AbstractManager {
  constructor() {
    super({ table: "shelters" })
  }

  insert(shelters) {
    return this.database.query(
      `insert into ${this.table} (nameShelters, coordXschelters, coordYschelters) values (?, ?, ?)`,
      [shelters.nameShelters, shelters.coordXshelters, shelters.coordYshelters]
    )
  }

  update(shelters) {
    return this.database.query(
      `update ${this.table} set nameShelters = ?, coordXshelters = ?, coordYshelters = ? where id = ?`,
      [shelters.nameShelters, shelters.coordXshelters, shelters.coordYshelters]
    )
  }
}

module.exports = SheltersManager
