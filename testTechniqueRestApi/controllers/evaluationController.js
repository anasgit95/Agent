const Evaluation = require("../models/evaluation");
 

exports.creatEvaluation = async (req, res) => {
 
  try {
      
      const listResponse = await Evaluation.create({ ...req.body  });
    
        res.send(listResponse);
  } catch (error) {
    console.log("error", error.message);
    res.status(400).end();
  }
};
exports.login = async (req, res) => {
  try {
    console.log(req.body)
     const current_user = await Evaluation.findOne({ Email: req.body.Email, Hash_Password: req.body.Password }).lean();
     if (!current_user) {
      return new Error('Identifiant / mot de passe incorrect')
    }
    if (current_user.Active === false && current_user.Deleted === false) {
      return new Error("Votre compte a été banni veuillez contacter l'administrateur")
    }
    else if (current_user.Active === false && current_user.Deleted === true) {
      return new Error("Votre compte a été désactivé veuillez contacter l'administrateur")
    } else if (current_user.Active === true && current_user.Deleted === false) {
      if (current_user.ExpirationAccountDate) {
        let today = new Date();
        let expirationDate = new Date(current_user.ExpirationAccountDate);
        if (today > expirationDate) {
          return new Error("Votre compte a expiré, veuillez contacter l'administrateur")
        }
      }
      const token = jwt.sign({ id: current_user._id }, "Agent", { algorithm: "HS256", subject: current_user.Email, expiresIn: "8h" });
      let firstConnection = true;
      if (current_user.LastConnection) {
        firstConnection = false;
      }
      let connectedUser = await Evaluation.findOneAndUpdate(
        {
          _id: current_user._id,
        },
        {
          Token: token,
          LastConnection: new Date()
        },
        {
          new: true,
        }
      );
      console.log(connectedUser)
      connectedUser.FirstConnection = firstConnection;
      res.send(connectedUser);

      return ;
    }
  } catch (error) {
    console.log(error)
     return error
  }

};


exports.getOneAgent = async (req, res) => {
  try {
    const doc = await Evaluation.findOne(
        { _id: req.params._id }
                );
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
    const lists  =  await User.find({Role:"agent"});
    console.log(lists)
    res.send(lists);
  } catch (e) {
    console.log(e);
    // res.status(400).end()
  }
};

 