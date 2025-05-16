import { z, type ZodType } from 'zod';
import type { SetLevelRequest, JSONRPCRequest } from '../schema';
import { loggingLevelParam } from './common-params';
import { jsonRpcRequestSchema } from './jsonrpc-request';

/**
 * A request from the client to the server, to enable or adjust logging.
 */
export const setLevelRequestSchema = jsonRpcRequestSchema.extend({
  method: z.literal('logging/setLevel'),
  params: z.object(loggingLevelParam),
}) satisfies ZodType<SetLevelRequest & JSONRPCRequest>;
