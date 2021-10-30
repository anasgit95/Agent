var express = require("express");
const agentController = require("../controllers/agentController");
 

var router = express.Router();
router.get("/getOneAgent/:_id", agentController.getOneAgent);
 

router.post("/", agentController.creatAgent);
router.post("/login", agentController.login);

router.delete("/:_id/:_idElement", agentController.deleteElement);
router.put("/:_id", agentController.updateUser);


router.get("/", agentController.getAllList);
  

module.exports = router;
