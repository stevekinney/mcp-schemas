import { z } from 'zod';
import type { ServerRequest } from '../schema';
import { pingRequestSchema } from './ping-request';
import { createMessageRequestSchema } from './create-message-request';
import { listRootsRequestSchema } from './list-roots-request';
import { jsonRpcRequestSchema } from './jsonrpc-request';

/**
 * Union of all possible server requests.
 */
// Explicitly define ServerRequest schema with proper method values
const serverRequestSchema = jsonRpcRequestSchema.extend({
  method: z.enum(['ping', 'sampling/createMessage', 'roots/list']),
  params: z.object({}).passthrough().optional(),
});

// Export the schema with correct type
export { serverRequestSchema };

// Runtime schemas are preserved for validation
const runtimeValidationSchema = z.union([pingRequestSchema, createMessageRequestSchema, listRootsRequestSchema]);

// Add a type guard function for runtime validation
export function isServerRequest(value: unknown): value is ServerRequest {
  return runtimeValidationSchema.safeParse(value).success;
}
