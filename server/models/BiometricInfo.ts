import { Schema, model } from 'mongoose';

const biometricInfoSchema = new Schema({
  sex: { type: String, required: false },
  gender: { type: String, required: false },
  height: { type: Number, required: false },
  weight: { type: Number, required: false },
  eyeColour: { type: String, required: false },
  hairColour: { type: String, required: false }
});

const BiometricInfo = model('biometricInfo', biometricInfoSchema);

export default BiometricInfo;
