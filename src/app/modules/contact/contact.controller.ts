import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { ContactServices } from './contact.services';
import { sendResponse } from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createContactIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await ContactServices.createContactIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Contact Created Successfully!',
    data: result,
  });
});
const getAllContactFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await ContactServices.getAllContactFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Contact Retrieved Successfully!',
    data: result,
  });
});
const updateContactFromDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await ContactServices.updateContactFromDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Contact Updated Successfully!',
    data: result,
  });
});
const deleteContactFromDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await ContactServices.deleteContactFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Contact Deleted Successfully!',
    data: result,
  });
});

export const ContactController = {
  createContactIntoDB,
  getAllContactFromDB,
  updateContactFromDB,
  deleteContactFromDB,
};
