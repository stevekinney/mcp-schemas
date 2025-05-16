import { z, type ZodType } from 'zod';
import type { BlobResourceContents } from '../schema';
import { resourceContentsSchema } from './resource-contents';

/**
 * The binary contents of a resource.
 */
export const blobResourceContentsSchema = resourceContentsSchema.extend({
  /**
   * A base64-encoded string representing the binary data of the item.
   */
  blob: z.string(),
}) satisfies ZodType<BlobResourceContents>;
