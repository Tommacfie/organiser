import { AppointmentType } from './Appointment';
import { DoctorType } from './Doctor';
import { IllnessType } from './Illness';
import { BiometricInfoType } from './BiometricInfo';
import { MedicationType } from './Medication';

export type MedicalType = {
  biometricInfo: BiometricInfoType;
  illnesses: IllnessType[];
  medications: MedicationType[];
  doctors: DoctorType[];
  appointments: AppointmentType[];
};
