import { Schema, model } from 'mongoose';

const symptomSchema = new Schema({
  name: String,
  areasAffected: [String],
  severity: Number
});

const Symptom = model('symptom', symptomSchema);

export default Symptom;
