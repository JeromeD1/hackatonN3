const AbstractManager = require("./AbstractManager")

class EventManager extends AbstractManager {
  constructor() {
    super({ table: "event" })
  }

  insert(event) {
    return this.database.query(
      `insert into ${this.table} (nameEvent, coordXevent, coordYevent) values (?,?,?)`,
      [event.nameEvent, event.coordXevent, event.coordYevent]
    )
  }

  update(event) {
    return this.database.query(
      `UPDATE ${this.table} SET nameEvent = ?, coordXevent = ?, coordYevent = ? WHERE (id = ?)`,
      [event.nameEvent, event.coordXevent, event.coordYevent]
    )
  }
}

module.exports = EventManager
