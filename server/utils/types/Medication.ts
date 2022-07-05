import { DoctorType } from './Doctor';

export type MedicationType = {
  name: string;
  prescription: boolean;
  prescribedBy: DoctorType;
  dosage: number;
};
