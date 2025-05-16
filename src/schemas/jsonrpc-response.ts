import type { ZodType } from 'zod';
import { z } from 'zod';
import type { JSONRPCResponse } from '../schema';
import { JSONRPC_VERSION_SCHEMA } from './constants';
import { requestIdSchema } from './request-id';
import { resultSchema } from './result';

/**
 * A successful (non-error) response to a request.
 */
export const jsonRpcResponseSchema = z.object({
  jsonrpc: JSONRPC_VERSION_SCHEMA,
  id: requestIdSchema,
  result: resultSchema,
}) satisfies ZodType<JSONRPCResponse>;
