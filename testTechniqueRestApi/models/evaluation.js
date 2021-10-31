const mongoose = require('mongoose');
const { Schema } = mongoose;

const PriorityClientS = mongoose.Schema({
    enhancing: Boolean,
    Embellir: Boolean,
    Economic: Boolean,
    Augmentation:Boolean,
    Adaptable:Boolean,
    Reduce:Boolean,
    Solve:Boolean
  });
  const SolutionS = mongoose.Schema({
    yes: Boolean,
    yesBut: Boolean,
    onlyPart: Boolean,
    No:Boolean,
    solutionDescription:String
 
  });
 
const evaluationSchema = new Schema({
    FirstName: { type: String, trim: true, required: true },
    LastName: { type: String, trim: true, required: true },
    visitDate: { type: Date },
    Adresse: { type: String,},
    PostalCode: { type: String },
    Type: { type: String, enum: ["MI", "A","L","T"], default: "MI" },
    YearConstruction:{type:String},
    OccupentNumber:Number,
    PriorityClient:{
        type:PriorityClientS,
    },
    techniqualSolution:{
        type:SolutionS,
    },
    LogementOccupation: { type: Boolean},

  
    ExpirationAccountDate: Date,
    LastConnection: Date,
    Token: String,
  Active:{ type: Boolean, default: true },
  Archived:{ type: Boolean, default: false },
  Deleted: { type: Boolean, default: false },
   Creator: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  Modifier: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
  deletedAt: Date,
  Role:{ type: String, default: "agent" },
 
 
},
);
 

const Evaluation = mongoose.model('evaluation', evaluationSchema, 'evaluation');
module.exports = Evaluation
