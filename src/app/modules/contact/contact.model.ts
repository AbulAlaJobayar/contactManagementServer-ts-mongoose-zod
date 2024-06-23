import { Schema, model } from 'mongoose';
import { TContact, favorites } from './contact.interface';
import { string } from 'zod';

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
    favorite:{
        type:String,
        required:true,
        enum: Object.values(favorites),
        default:favorites.NO

    }
  },
  { timestamps: true }
);
export const Contact = model<TContact>('Contact', contactSchema);
