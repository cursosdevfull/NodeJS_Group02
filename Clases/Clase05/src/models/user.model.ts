import mongoose, { Schema } from 'mongoose';
import { UserDocument } from '../interfaces';

const schema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },

  isActive: {
    type: Boolean,
    default: true,
  },

  refreshToken: String,

  roles: [{ type: Schema.Types.ObjectId, ref: 'Role' }],
});

export default mongoose.model<UserDocument>('User', schema);
