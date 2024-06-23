import { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';
import { ContactValidation } from './contact.validations';
import { ContactController } from './contact.controller';

const router = Router();
router.post(
  '/create-contact',
  validateRequest(ContactValidation.createContactValidation),
  ContactController.createContactIntoDB
);
router.get('/get-contact', ContactController.getAllContactFromDB);
router.patch(
  '/:id',
  validateRequest(ContactValidation.updateContactValidation),
  ContactController.updateContactFromDB
);
router.delete('/:id', ContactController.deleteContactFromDB);
export const ContactRouter = router;
