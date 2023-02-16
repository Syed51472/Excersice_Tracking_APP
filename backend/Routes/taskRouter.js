const express = require("express");
const taskController = require("../Controller/taskController");

const router = express.Router();

router.route("/insert").post(taskController.sayInsert);
router.route("/get").get(taskController.sayGet);
router.route("/edit/:id").get(taskController.sayGetbyid);
router.route("/update/:id").put(taskController.sayUpdate);
router.route("/delete/:id").delete(taskController.sayDelete);

module.exports = router;
