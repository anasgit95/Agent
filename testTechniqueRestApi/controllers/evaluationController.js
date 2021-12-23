const Evaluation = require("../models/evaluation");
const Image = require("../models/images");
const fs = require('fs');
var atob = require('atob');

 
  const RandomString = (length, style = 'frictionless', characters = '') => {
  const Styles = {
      'all':          allCharacters,
      'frictionless': frictionless,
      'characters':   provided
  }

  let result              = '';
  var allCharacters     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var frictionless      = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz';
  var provided          = characters;

  const generate = (set) => {
      return set.charAt(Math.floor(Math.random() * set.length));
  };

  for ( let i = 0; i < length; i++ ) {
      switch(Styles[style]) {
          case Styles.all:
              result += generate(allCharacters);
              break;
          case Styles.frictionless:
              result += generate(frictionless);
              break;
          case Styles.characters:
              result += generate(provided);
              break;
      }
  }
  return result;
}
async function writeToFile(name,buff) {
 await fs.promises.writeFile('./images/'+name+'.png', buff, function (err) {
    console.log(name+'.png')
    if (err) throw err;   
  }); 
 

  console.log("done")
}
 
exports.creatEvaluation = async (req, res) => {
   try {
     
       const propertyNames = Object.keys(req.body);
      //  propertyNames.map(item=>console.log(req.body[item] && req.body[item].images))
     
      //  for(let i=0;i<req.body.images.length;i++) {
      //   req.body.images[i].evaluation=listResponse._id;
      //    const NewPhoto = await Image.create({ ...req.body.images[i] });
         for (const item of propertyNames) 

        {
          if(req.body[item] && req.body[item].images ) {
               for (const ele of req.body[item].images) 

{              
  
            let buff = new Buffer(ele.photo, 'base64');
            let name = RandomString(5, 'characters', '0123456789');
            await writeToFile(name,buff)
            
             ele.photo =name+'.png';      
 
             }
              
          }
        }
 
   const listResponse = await Evaluation.create({ ...req.body  });

      //  }
         res.send(listResponse);
  } catch (error) {
    console.log("errors", error.message);
    return res.status(400).send({
      message: error.message
   });  }
};
 
exports.createImages = async (req, res) => {
 
  try {

  } catch (error) {
    console.log("errors", error.message);
  
};
}

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

 