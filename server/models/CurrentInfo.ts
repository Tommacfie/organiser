import { Schema, model } from 'mongoose';
import Address from './Address';
import BiometricInfo from './BiometricInfo';

const currentInfoSchema = new Schema({
  currentAddress: Address,
  currentAge: Number,
  currentBiometricInfo: BiometricInfo
});

const CurrentInfo = model('currentInfo', currentInfoSchema);

export default CurrentInfo;
