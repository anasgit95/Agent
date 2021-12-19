const Evaluation = require("../models/evaluation");
const Image = require("../models/images");


exports.creatEvaluation = async (req, res) => {
 
  try {
      
       const listResponse = await Evaluation.create({ ...req.body  });
       for(let i=0;i<req.body.images.length;i++) {
        req.body.images[i].evaluation=listResponse._id;
         const NewPhoto = await Image.create({ ...req.body.images[i] });



       }
         res.send(listResponse);
  } catch (error) {
    console.log("errors", error.message);
    res.status(400).end();
  }
};
 


exports.getOneAgent = async (req, res) => {
  try {
    const doc = await Evaluation.findOne(
        { _id: req.params._id }
                ).populate("Creator");;
         res.send(doc)
    
  } catch (error) {
    console.log("errir",error.message);
  }
};

exports.updateUser = async (req, res) => {
  try {
    console.log(req)
    const doc = await Evaluation.findOneAndUpdate(
        { _id: req.params._id },
        { ...req.body  },
        { new: true }
        );
         res.send(doc)
    
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteElement = async (req, res) => {
    try {
        console.log(req.body)
        const doc = await Evaluation.findOneAndUpdate(
            { _id: req.params._id },
            { $pull: { "elements" : {  _id: req.params._idElement  } } },
             { new: true }
            );
                res.send(doc)
        
      } catch (error) {
        console.log(error.message);
      }
};
 


exports.getAllList = async (req, res) => {
  
  try {
     const lists  =  await Evaluation.find({}).populate("Creator").sort({'createdAt': -1});
     res.send(lists);
  } catch (e) {
    console.log(e);
      res.status(400).end()
  }
};

 