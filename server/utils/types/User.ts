import { BiometricInfoType } from './BiometricInfo';
import { CategoryType } from './Category';
import { CurrentInfoType } from './CurrentInfo';

export type UserType = {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  email: string;
  password: string;
  currentInfo: CurrentInfoType;
  biometric: BiometricInfoType;
  medical: MedicalType;
  categories: CategoryType[];
};
