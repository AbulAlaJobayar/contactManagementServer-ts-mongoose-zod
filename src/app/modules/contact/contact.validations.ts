import { z } from 'zod';

const createContactValidation = z.object({
  name: z.string({
    invalid_type_error: 'Name must be string',
    required_error: 'name must be required',
  }),
  email: z.string().email().optional(),
  phoneNumber: z.string({
    invalid_type_error: 'PhoneNumber must be string',
    required_error: 'PhoneNumber must be required',
  }),

  address: z.string({
    invalid_type_error: 'Address must be string',
    required_error: 'Address must be required',
  }),
  photoUrl: z.string(),
});
const updateContactValidation = z.object({
  name: z
    .string({
      invalid_type_error: 'Name must be string',
      required_error: 'name must be required',
    })
    .optional(),
  email: z.string().email().optional(),
  phoneNumber: z
    .string({
      invalid_type_error: 'PhoneNumber must be string',
      required_error: 'PhoneNumber must be required',
    })
    .optional(),

  address: z
    .string({
      invalid_type_error: 'Address must be string',
      required_error: 'Address must be required',
    })
    .optional(),
  photoUrl: z.string().optional(),
});

export const ContactValidation = {
  createContactValidation,
  updateContactValidation,
};
