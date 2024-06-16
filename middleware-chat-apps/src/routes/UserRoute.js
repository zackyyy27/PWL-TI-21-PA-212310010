const express = require("express");
const router = express.Router();
const userController = require("../controllers/UsersControllers");

router.get("/", userController.index);
router.post("/create", userController.createData);
router.get("/fetch-all", userController.GetAll);
module.exports = router;