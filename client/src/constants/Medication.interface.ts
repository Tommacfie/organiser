import { Doctor } from './Medical.interface';

export interface Medication {
  name: string;
  prescription: boolean;
  prescribedBy: Doctor;
  dosage: number;
}
