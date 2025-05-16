import { z, type ZodType } from 'zod';
import type { Annotations } from '../schema';
import { roleSchema } from './role';

/**
 * Optional annotations for the client. The client can use annotations to inform how objects are used or displayed
 */
export const annotationsSchema = z.object({
  /**
   * Describes who the intended customer of this object or data is.
   *
   * It can include multiple entries to indicate content useful for multiple audiences (e.g., `["user", "assistant"]`).
   */
  audience: z.optional(z.array(roleSchema)),
  /**
   * Describes how important this data is for operating the server.
   *
   * A value of 1 means "most important," and indicates that the data is
   * effectively required, while 0 means "least important," and indicates that
   * the data is entirely optional.
   */
  priority: z.optional(z.number().min(0).max(1)),
}) satisfies ZodType<Annotations>;

/**
 * Type guard function for validating if a value is an Annotations object
 * @param value - The value to check
 * @returns True if the value matches the Annotations schema
 */
export function isAnnotations(value: unknown): value is Annotations {
  return annotationsSchema.safeParse(value).success;
}
