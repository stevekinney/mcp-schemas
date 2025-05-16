import type { ZodType } from 'zod';
import type { JSONRPCRequest } from '../schema';
import { JSONRPC_VERSION_SCHEMA } from './constants';
import { requestSchema } from './request';
import { requestIdSchema } from './request-id';

/**
 * A request that expects a response.
 */
export const jsonrpcRequestSchema = requestSchema.extend({
  jsonrpc: JSONRPC_VERSION_SCHEMA,
  id: requestIdSchema,
}) satisfies ZodType<JSONRPCRequest>;
