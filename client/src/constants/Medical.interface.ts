import { Address, BiometricInfo } from './Interfaces';
import { Medication } from './Medication.interface';

export interface Symptom {
  name: string;
  areaAffected: string;
  severity: number;
}
export interface Illness {
  name: string;
  dateStarted: Date;
  symptoms: Symptom[];
}

export interface Doctor {
  name: string;
  specialization: string;
  address: Address;
}
export interface Appointment {
  name: string;
  date: Date;
  doctor: Doctor;
}
export interface Medical {
  biometricInfo: BiometricInfo;
  illnesses: Illness[];
  medications: Medication[];
  doctors: Doctor[];
  appointments: Appointment[];
}
