import mongoose from 'mongoose';

mongoose.connect('mongodb://local:27017/organiserdb', (error) => {
  // eslint-disable-next-line no-console
  if (error) return console.log(error.message);
  // eslint-disable-next-line no-console
  return console.log('Connected to mongodb');
});

export default mongoose;
