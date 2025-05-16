import { z, type ZodType } from 'zod';
import type { CallToolRequest, JSONRPCRequest } from '../schema';
import { jsonRpcRequestSchema } from './jsonrpc-request';

/**
 * Used by the client to invoke a tool provided by the server.
 */
export const callToolRequestSchema = jsonRpcRequestSchema.extend({
  method: z.literal('tools/call'),
  params: z.object({
    name: z.string(),
    arguments: z.optional(z.record(z.string(), z.unknown())),
  }),
}) satisfies ZodType<CallToolRequest & JSONRPCRequest>;
