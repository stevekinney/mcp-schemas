import { z, type ZodType } from 'zod';
import type { ImageContent } from '../schema';
import { annotationsSchema } from './annotations';

/**
 * An image provided to or from an LLM.
 */
export const imageContentSchema = z.object({
  type: z.literal('image'),
  /**
   * The base64-encoded image data.
   */
  data: z.string().base64(),
  /**
   * The MIME type of the image. Different providers may support different image types.
   */
  mimeType: z.string(),
  /**
   * Optional annotations for the client.
   */
  annotations: z.optional(annotationsSchema),
}) satisfies ZodType<ImageContent>;
