import { SymptomType } from './Symptom';

export type IllnessType = {
  name: string;
  dateStarted: Date;
  symptoms: SymptomType[];
};
