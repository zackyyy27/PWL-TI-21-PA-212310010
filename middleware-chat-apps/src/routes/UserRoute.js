const express = require("express");
const router = express.Router();
const userController = require("../controllers/UsersControllers");

router.get("/", userController.index);
router.post("/create", userController.createData);
router.post("/fetch-all", userController.createData);
module.exports = router;