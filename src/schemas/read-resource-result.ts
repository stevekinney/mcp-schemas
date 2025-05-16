import { z } from 'zod';
import type { ReadResourceResult } from '../schema';
import type { ZodType } from 'zod';
import { resultSchema } from './result';
import { textResourceContentsSchema } from './text-resource-contents';
import { blobResourceContentsSchema } from './blob-resource-contents';

/**
 * The server's response to a resources/read request from the client.
 */
export const readResourceResultSchema = resultSchema.extend({
  contents: z.array(z.union([textResourceContentsSchema, blobResourceContentsSchema])),
}) satisfies ZodType<ReadResourceResult>;
