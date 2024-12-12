import { z } from 'zod';
import createValidateFields from './fields';

export const createTaskValidateSchema = () => {
  const fields = createValidateFields();

  return z.object({
    title: fields.textRequiredField,
    description: fields.textRequiredField,
    assignee: fields.textRequiredField,
    status: fields.statusField,
    reporter: fields.textRequiredField,
    priority: fields.priorityField,
  });
};

export default createTaskValidateSchema;
