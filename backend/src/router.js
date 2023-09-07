const express = require("express")

const router = express.Router()

const sheltersControllers = require("./controllers/sheltersControllers")
const eventControllers = require("./controllers/eventControllers")
const usersControllers = require("./controllers/usersControllers")

router.get("/event", eventControllers.browse)
router.get("/event/:id", eventControllers.read)
router.post("/event", eventControllers.add)
router.put("/event/:id", eventControllers.edit)
router.delete("/event/:id", eventControllers.destroy)

router.get("/shelters", sheltersControllers.browse)
router.get("/shelters/:id", sheltersControllers.read)
router.put("/shelters/:id", sheltersControllers.edit)
router.post("/shelters", sheltersControllers.add)
router.delete("/shelters/:id", sheltersControllers.destroy)

router.get("/users", usersControllers.browse)
router.get("/users/:id", usersControllers.read)
router.put("/users/:id", usersControllers.edit)
router.post("/users", usersControllers.add)
router.delete("/users/:id", usersControllers.destroy)

module.exports = router
