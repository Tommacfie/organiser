import { AddressType } from './Address';
import { BiometricInfoType } from './BiometricInfo';

export type CurrentInfoType = {
  currentAddress: AddressType;
  currentAge: number;
  currentBiometricInfo: BiometricInfoType;
};
