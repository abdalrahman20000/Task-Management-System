const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/user_controllers");
const auth = require("../middle-wares/auth");

router.post("/register", user_controller.register);
// console.log("e log 2");
router.post("/log-in", user_controller.log_in);
router.post("/view", user_controller.view);

router.post("/tasks", user_controller.add_task);
router.get("/tasks", user_controller.get_task);
router.put("/tasks", user_controller.update_task);
router.patch("/tasks", user_controller.delete_task);

module.exports = router;