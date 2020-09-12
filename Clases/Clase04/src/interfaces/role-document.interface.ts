import { Document } from 'mongoose';

export default interface document extends Document {
  roleName: string;
  isActive: boolean;
}
