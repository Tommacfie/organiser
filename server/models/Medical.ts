import { Schema, model } from 'mongoose';
import BiometricInfo from './BiometricInfo';
import Illness from './Illness';
import Doctor from './Doctor';
import Medication from './Medication';
import Appointment from './Appointment';

const medicalSchema = new Schema({
  biometricInfo: BiometricInfo,
  illnesses: [Illness],
  medications: [Medication],
  doctors: [Doctor],
  appointments: [Appointment]
});

const Medical = model('medical', medicalSchema);

export default Medical;
