var express = require("express");
const agentController = require("../controllers/evaluationController");
 

var router = express.Router();
router.get("/getOneEvolution/:_id", agentController.getOneAgent);
router.get("/notifications", agentController.getAllListNotification);

router.get("/", agentController.getAllList);

router.post("/images", agentController.createImages);

router.post("/", agentController.creatEvaluation);
 

  

module.exports = router;
