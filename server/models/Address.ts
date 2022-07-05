import { Schema, model } from 'mongoose';

const addressSchema = new Schema({
  street: String,
  number: Number,
  townOrCity: String,
  postCode: String,
  country: String
});

const Address = model('address', addressSchema);

export default Address;
