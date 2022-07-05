import { Schema, model } from 'mongoose';
import Doctor from './Doctor';

const medicationSchema = new Schema({
  name: String,
  prescription: Boolean,
  prescribedBy: Doctor,
  dosage: Number
});

const Medication = model('medication', medicationSchema);

export default Medication;
