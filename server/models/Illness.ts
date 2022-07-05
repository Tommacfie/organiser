import { Schema, model } from 'mongoose';
import Symptom from './Symptom';

const illnessSchema = new Schema({
  name: String,
  dateStarted: Date,
  symptoms: [Symptom]
});

const Illness = model('illness', illnessSchema);

export default Illness;
