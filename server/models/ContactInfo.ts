import { Schema, model } from 'mongoose';
import Address from './Address';
import SocialNetwork from './SocialNetwork';

const contactInfoSchema = new Schema({
  mobile: String,
  home: String,
  email: String,
  socialNetworks: [SocialNetwork],
  currentAddress: Address
});

const ContactInfo = model('contactInfo', contactInfoSchema);

export default ContactInfo;
