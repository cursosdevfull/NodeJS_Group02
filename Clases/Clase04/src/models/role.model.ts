import mongoose, { Schema } from 'mongoose';
import { RoleDocument } from '../interfaces';

const schema: Schema = new Schema({
  roleName: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
    unique: true,
  },

  isActive: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model<RoleDocument>('Role', schema);
