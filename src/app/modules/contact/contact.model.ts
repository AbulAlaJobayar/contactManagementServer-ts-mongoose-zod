import { Schema, model } from 'mongoose';
import { TContact } from './contact.interface';

const contactSchema = new Schema<TContact>(
  {
    name: {
      type: String,
      required: [true, 'please input your name'],
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
      required: [true, 'please input your phone Number'],
    },
    address: {
      type: String,
      required: [true, 'please input your Address'],
    },
    photoUrl: {
      type: String,
      required: [true, 'please input your image '],
    },
  },
  { timestamps: true }
);
export const Contact = model<TContact>('Contact', contactSchema);
