import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  // username: { type: String, required: true },
  email: { type: String, required: true },
  // authentication: {
  //   password: { type: String, required: true, select: false },
  //   salt: { type: String, select: false },
  //   sessionToken: { type: String, select: false },
  // },
  password: { type: String, required: true },
  refreshToken: [String],
});

export const User = mongoose.model('User', userSchema);