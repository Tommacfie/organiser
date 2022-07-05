import { Schema, model } from 'mongoose';
import Address from './Address';

const doctorSchema = new Schema({
  name: String,
  specialization: String,
  address: Address
});

const Doctor = model('doctor', doctorSchema);

export default Doctor;
