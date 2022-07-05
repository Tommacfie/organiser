import { Medical } from './Medical.interface';

export interface UserHookResult {
  data: undefined;
  loading: boolean;
  error?: unknown;
}
export interface BiometricInfo {
  sex: string;
  gender?: string;
  height: number;
  weight?: number;
  eyeColour: string;
  hairColour: string;
}

export interface Address {
  street: string;
  number: number;
  townOrCity: string;
  postCode: string;
  country: string;
}
export interface SocialNetwork {
  name: string;
  url: string;
  userHandle: string;
}
export interface ContactInfo {
  mobile: string;
  home: string;
  email: string;
  socials: SocialNetwork[];
  currentAddress: Address;
}
export interface CurrentInfo {
  currentAddress: Address;
  currentAge: number;
  currentBiometricInfo: BiometricInfo;
}
export interface Category {
  name: string;
}
export interface User {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  email: string;
  password: string;
  currentInfo: CurrentInfo;
  biometric: BiometricInfo;
  medical: Medical;
  categories: Category[];
}
