import { z } from 'zod';
import { ETaskPriority, ETaskStatus } from '~/types/task';

const createValidateFields = () => {
  return {
    textOptionalField: z.string().optional(),
    textRequiredField: z.string().min(1, 'Required field!'),
    statusField: z.nativeEnum(ETaskStatus),
    priorityField: z.nativeEnum(ETaskPriority),
    numberRequiredField: z
      .number({
        required_error: 'Required field!',
        invalid_type_error: 'Required field!',
      })
      .nonnegative('Value must be more than 0'),
  };
};

export default createValidateFields;
