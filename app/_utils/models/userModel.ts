import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { IUser } from '@/app/_utils/interfaces/UserInterfaces';

const userSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 8,
    select: false
  }
});
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;