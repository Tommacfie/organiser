import { Schema, model } from 'mongoose';

const socialNetworkSchema = new Schema({
  name: String,
  url: String,
  userHandle: String
});

const SocialNetwork = model('socialNetwork', socialNetworkSchema);

export default SocialNetwork;
