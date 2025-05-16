import { z, type ZodType } from 'zod';
import type { ReadResourceRequest, JSONRPCRequest } from '../schema';
import { uriParam } from './common-params';
import { jsonRpcRequestSchema } from './jsonrpc-request';

/**
 * Sent from the client to the server, to read a specific resource URI.
 */
export const readResourceRequestSchema = jsonRpcRequestSchema.extend({
  method: z.literal('resources/read'),
  params: z.object(uriParam),
}) satisfies ZodType<ReadResourceRequest & JSONRPCRequest>;
