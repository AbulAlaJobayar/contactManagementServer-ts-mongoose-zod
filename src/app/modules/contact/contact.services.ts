import { TContact } from './contact.interface';
import { Contact } from './contact.model';

const createContactIntoDB = async (payload: TContact): Promise<TContact> => {
  // crate contact
  const result = await Contact.create(payload);
  return result;
};
const getAllContactFromDB = async (): Promise<TContact[]> => {
  const result = await Contact.find();
  return result;
};
const updateContactIntoDB = async (
  id: string,
  payload: Partial<TContact>
): Promise<TContact | null> => {
  //   updateProduct
  const result = Contact.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deleteContactFromDB = async (id: string): Promise<TContact | null> => {
  const result = await Contact.findByIdAndDelete(id);
  return result;
};

export const ContactServices = {
  createContactIntoDB,
  getAllContactFromDB,
  updateContactIntoDB,
  deleteContactFromDB,
};
