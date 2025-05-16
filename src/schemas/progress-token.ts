import { z } from 'zod';
import type { ProgressToken } from '../schema';
import type { ZodType } from 'zod';

/**
 * A progress token, used to associate progress notifications with the original request.
 */
export const progressTokenSchema = z.union([z.string(), z.number()]) satisfies ZodType<ProgressToken>;
