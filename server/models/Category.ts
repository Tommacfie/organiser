import { Schema, model } from 'mongoose';

const categorySchema = new Schema({
  name: String
});

const Category = model('category', categorySchema);

export default Category;
