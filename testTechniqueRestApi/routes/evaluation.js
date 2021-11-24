var express = require("express");
const agentController = require("../controllers/evaluationController");
 

var router = express.Router();
router.get("/getOneAgent/:_id", agentController.getOneAgent);
 
router.get("/", agentController.getAllList);

router.post("/", agentController.creatEvaluation);
 
 
  

module.exports = router;
