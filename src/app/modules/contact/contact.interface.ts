export enum favorites{
   YES = 'YES',
  NO = 'NO'
  }
export type TContact = {
  name: string;
  email?: string;
  phoneNumber: string;
  address: string;
  photoUrl: string;
  favorite:favorites
}

