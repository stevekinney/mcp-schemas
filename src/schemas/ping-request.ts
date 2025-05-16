import { z, type ZodType } from 'zod';
import type { PingRequest, JSONRPCRequest } from '../schema';
import { jsonRpcRequestSchema } from './jsonrpc-request';

/**
 * A ping, issued by either the server or the client, to check that the other party is still alive. The receiver must promptly respond, or else may be disconnected.
 */
export const pingRequestSchema = jsonRpcRequestSchema.extend({
  method: z.literal('ping'),
  params: z.object({}),
}) satisfies ZodType<PingRequest & JSONRPCRequest>;
