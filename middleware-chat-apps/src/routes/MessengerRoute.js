const  express = require ("express");
const router = express.Router();
const MessegerController = require ("../controllers/MessengerControllers");

router.get("/", MessegerController.index);
router.post("/create", MessegerController.createData);
router.get("/fetch-all",MessegerController.getAll)
router.get("/:id", MessegerController.getByID);
router.put("/update", MessegerController.updatedData);
router.delete("/delete", MessegerController.deleteData);
module.exports = router;
