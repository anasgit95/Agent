const mongoose = require('mongoose');
const { Schema } = mongoose;
const evaluationSchema = new Schema({
 
 
 
  repartissant :[{
    nomDeMur:String,
    composition:String,
    position:String,
    epaisseur:Number,
    isolation:String,
    typeIsolation:String,
    epaisseurIsolation:Number,
    resistanceIsolation:Number,
    longeur:Number,
    hauteur:Number,
    orienation:String
  }],
  ouvrantType :[{
    Type:String,
    id:Number, 
    designation:String,
    typeDeParoi:String,
    typeDeMenuiserie:String,
    materiaux:String,
    TypeDeViltrage:String,
    epaisseurLame:Number,
    gazDeRemplissage:String,
   }],
  ouvrantTypeRelation:[{

    longeur:Number,
    hauteur:Number,
    designationValue:String,
    laison:String,
    ouvrantNumber:Number,
    masque:String,
    orienation:String,
    protection:String
  }],
  porte :[{
    Type:String,
    id:Number, 
    nature:String,
    typeDePorte:String,
    coefficient:String,

   }],
   porteDesignation :[{
       longeur:Number,
      hauteur:Number,
      designationValue:String,
      laison:String,
      ouvrantNumber:Number,
       orienation:String,
   }],

   masqueMur:[{
    designation:String,
    masqueProche:String,
    masqueLoitin:String,
    distanceMoyenne:Number,
    hauteurMoyenne:Number,
   }],

   plancherBas: [{
    compositionPlancherBas: String,
    positionPlancherBas: String,
    EpaisseurPlancher: Number,
    PlancherBasIsoler: String,
    TypeIsolant: String,
    EpaisseurIsolant: Number,
    ResistanceIsolant: Number,
   }],
   sousSol:{
    typeSousSol: String,
    surface:String,
    hauteur: String,
   },
   linetique:{
    liason:String,
    liasonLongeur:Number,
    detail:String,
    isolationPoutrse:String,
    plancherIntermediare:String,
    comble:String,
    hauteurMoyenne:Number,
    surfaceComble:Number,

   },
  architecture:{
    surfacehabtable:Number,
    lvlNumber:Number,
    platFondLvl:String,
    plancherBas:String
  },
  plancherHaut: [{
    compositionPlancherBas: String,
    positionPlancherBas: String,
    EpaisseurPlancher: Number,
    PlancherBasIsoler: String,
    TypeIsolant: String,
    EpaisseurIsolant: Number,
    ResistanceIsolant: Number,
   }],

  context:{
  confortAccoutique:String,
  confortEte:String,
  profond:String,
  certificatEco:String,
  priority:[String],
  extensionBatimant:[String],
  valueTechnique:[String],
  solution:String,
  logement:String},
   generaliter :{
    fullName: { type: String, trim: true, required: true },
    visitDate: { type: Date },
    adresse: { type: String,},
    postalCode: { type: String },
    type: { type: String },
    yearConstruction:{type:String},
    occupantNumber:Number,
    adultNumber:Number,
    PriorityClient:String,
    techniqualSolution:String,
    occupation: { type: String},
   } ,
  


   
    Creator: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  Modifier: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
  deletedAt: Date,
  
 
},
);
 

const Evaluation = mongoose.model('evaluation', evaluationSchema, 'evaluation');
module.exports = Evaluation
