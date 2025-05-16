import { z } from 'zod';
import type { ReadResourceResult, JSONRPCResponse } from '../schema';
import type { ZodType } from 'zod';
import { jsonRpcResponseSchema } from './jsonrpc-response';
import { textResourceContentsSchema } from './text-resource-contents';
import { blobResourceContentsSchema } from './blob-resource-contents';

/**
 * The server's response to a resources/read request from the client.
 */
export const readResourceResultSchema = jsonRpcResponseSchema.extend({
  contents: z.array(z.union([textResourceContentsSchema, blobResourceContentsSchema])),
}) satisfies ZodType<ReadResourceResult & JSONRPCResponse>;
