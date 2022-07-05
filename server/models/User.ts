import { Schema, model } from 'mongoose';
import BiometricInfo from './BiometricInfo';
import Category from './Category';
import CurrentInfo from './CurrentInfo';
import Medical from './Medical';

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  currentInfo: { type: CurrentInfo, required: false },
  biometric: { type: BiometricInfo, required: false },
  medical: { type: Medical, required: false },
  categories: { type: [Category], required: false }
});

const User = model('user', userSchema);

export default User;
