import { Schema, model } from 'mongoose';
import Doctor from './Doctor';
const appointmentSchema = new Schema({
  name: String,
  date: Date,
  doctor: Doctor
});

const Appointment = model('appointment', appointmentSchema);

export default Appointment;
