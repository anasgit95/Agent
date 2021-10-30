const mongoose = require('mongoose');
const { Schema } = mongoose;
 
 
const userSchema = new Schema({
  Active:{ type: Boolean, default: true },
  Archived:{ type: Boolean, default: false },
  Deleted: { type: Boolean, default: false },
  Private: { type: Boolean, default: false },
  Creator: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  Modifier: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
  deletedAt: Date,
  Role:{ type: String, default: "agent" },
  FirstName: { type: String, trim: true, required: true },
  LastName: { type: String, trim: true, required: true },
  Birthday: { type: Date, /*required: true*/ },
  Picture: { type: String, /* trim: true*/ },
  Phone1: { type: String, trim: true  },
  Phone2: { type: String, trim: true },
  Email: { type: String, unique: true, lowercase: true, trim: true, required: true },
  Hash_Password: { type: String, required: true },
  ExpirationAccountDate: Date,
  LastConnection: Date,
  Token: String
},
);
 

const User = mongoose.model('user', userSchema, 'user');
module.exports = User
