import type { ZodType } from 'zod';
import { z } from 'zod';
import type { JSONRPCBatchResponse } from '../schema';
import { errorSchema } from './jsonrpc-error';
import { jsonRpcResponseSchema } from './jsonrpc-response';

/**
 * A JSON-RPC batch response, as described in https://www.jsonrpc.org/specification#batch.
 */
export const batchResponseSchema = z.array(
  z.union([jsonRpcResponseSchema, errorSchema]),
) satisfies ZodType<JSONRPCBatchResponse>;
