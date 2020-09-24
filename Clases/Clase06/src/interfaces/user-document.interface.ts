import { Document } from 'mongoose';

export default interface document extends Document {
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  refreshToken: string;
  roles: any[];
}
