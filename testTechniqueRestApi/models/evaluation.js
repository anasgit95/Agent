const mongoose = require('mongoose');
const { Schema } = mongoose;
const evaluationSchema = new Schema({
  decrechement: [{
    sousSol: String,
    rdc: String,
    rPlus: String,

  }],

  repartitionLinetique: [{
    L: String,
    L1: String,
    L2: String,
    L3: String,
    L4: String,
    H1: String,
    H2: String,
  }],


  emetteur: {
    typeDeEmmetteur: String,
    systemeDeregulation: String,
    ProgrammationChauffage: String,
    nombreDeGenerateur: String,
    systemDappoint: String,
    annee: String,
  },
  emission: {
    energieDeChuaffage: String,
    typeGenerateur: String,
    puissanceNominale: String,
    nombreDeGenerateur: String,
    poisition: String,
    annee: String,

  },
  reseau: {
    typeOfemssion: String,
    distrubtionDesReseau: String,
    regulationTemperature: String,
    circulateur: String,

  },
  emplacementduballon: {
    emplacementduballon: String,

  },


  refroidissement: {
    systemeRefroidissement: String,
    surfacesRefroidie: String,

  },
  eclairage: {
    induction: {
      checked: Boolean,
      nombre: String,
    },
    fluorescent: {
      checked: Boolean,
      nombre: String,
    },
    halogene: {
      checked: Boolean,
      nombre: String,
    },
    fluo: {
      checked: Boolean,
      nombre: String,
    },
    led: {
      checked: Boolean,
      nombre: String,
    },
  },
  bureautique: [String],
  electromenager: [String],
  diver: String,
  electriciter: [String],
  gazGenral: [String],
  programmation: [String],
  puissance: String,
  cuisson: [String],
  consomationenergie:{
    chauffage: String,
    ecs: String,
    refroidissement: String,
    eclairage: String,
  },
  photovoltaique:{
    moduleType:[String],
    pose:[String],
    surfaceDuModule:String,
    capeteurNombre:String,
    orientation:String,
    inclinaison:String,
  },
 
  ventilation: {
    typeventilation: String,
    systemventilation: String,
    nombreDePiece: {
      principale: String,
      sdb: String,
      salleEau: String,
      wc: String
    },
    caracteristique: {
      puissance: String,
      annee: String
    }

  },
  eauSanitaire: {
    typeEcs: String,
    typeGenerator: String,
    capacityBallon: String,
    nombreBallon: String,
    anneGenerator: String,
  },


  repartissant: [{
    nomDeMur: String,
    composition: String,
    position: String,
    epaisseur: String,
    isolation: String,
    typeIsolation: String,
    epaisseurIsolation: String,
    resistanceIsolation: String,
    longeur: String,
    hauteur: String,
    orienation: String
  }],
  ouvrantType: [{
    nom: String,
    designation: String,
    typeDeParoi: String,
    typeDeMenuiserie: String,
    materiaux: String,
    TypeDeViltrage: String,
    epaisseurLame: String,
    gazDeRemplissage: String,
  }],
  ouvrantTypeRelation: [{

    longeur: String,
    hauteur: String,
    designationValue: String,
    laison: String,
    ouvrantString: String,
    masque: String,
    orienation: String,
    protection: String
  }],
  porte: [{
    Type: String,
    id: String,
    nature: String,
    typeDePorte: String,
    coefficient: String,

  }],
  porteDesignation: [{
    longeur: String,
    hauteur: String,
    designationValue: String,
    laison: String,
    ouvrantString: String,
    orienation: String,
  }],

  masqueMur: [{
    designation: String,
    masqueProche: String,
    masqueLoitin: String,
    distanceMoyenne: String,
    hauteurMoyenne: String,
  }],

  plancherBas: [{
    compositionPlancherBas: String,
    positionPlancherBas: String,
    EpaisseurPlancher: String,
    PlancherBasIsoler: String,
    TypeIsolant: String,
    EpaisseurIsolant: String,
    ResistanceIsolant: String,
  }],
  sousSol: {
    typeSousSol: String,
    surface: String,
    hauteur: String,
  },
  linetique: {
    liason: String,
    liasonLongeur: String,
    detail: String,
    isolationPoutrse: String,
    plancherIntermediare: String,
    comble: String,
    hauteurMoyenne: String,
    surfaceComble: String,

  },
  dimension: {

    longeur: String,
    largeur: String,
    hauteur: String,
    orientationPrincipale: String,

  },
  architecture: {
    surfacehabtable: String,
    lvlString: String,
    platFondLvl: String,
    plancherBas: String,
    sousSol: String,
    rdc: String,
    r1: String,
    r2: String
  },
  plancherHaut: [{
    compositionPlancherBas: String,
    positionPlancherBas: String,
    EpaisseurPlancher: String,
    PlancherBasIsoler: String,
    TypeIsolant: String,
    EpaisseurIsolant: String,
    ResistanceIsolant: String,
  }],

  context: {
    preciser: String,
    confortAccoutique: String,
    confortEte: String,
    profond: String,
    certificatEco: String,
    priority: [String],
    extensionBatimant: [String],
    valueTechnique: [String],
    solution: String,
    logement: String
  },
  generaliter: {
    email: { type: String, trim: true, required: true },
    phone: { type: String, trim: true, required: true },
    fullName: { type: String, trim: true, required: true },
    visitDate: { type: Date },
    adresse: { type: String, },
    postalCode: { type: String },
    type: { type: String },
    yearConstruction: { type: String },
    occupantString: String,
    adultString: String,
    PriorityClient: String,
    techniqualSolution: String,
    occupation: { type: String },
    typepreciser: String
  },




  Creator: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  Modifier: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
  deletedAt: Date,


},
);


const Evaluation = mongoose.model('evaluation', evaluationSchema, 'evaluation');
module.exports = Evaluation
