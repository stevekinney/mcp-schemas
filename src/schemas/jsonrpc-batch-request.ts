import type { ZodType } from 'zod';
import { z } from 'zod';
import type { JSONRPCBatchRequest } from '../schema';
import { jsonRpcNotificationSchema } from './jsonrpc-notification';
import { jsonRpcRequestSchema } from './jsonrpc-request';

/**
 * A JSON-RPC batch request, as described in https://www.jsonrpc.org/specification#batch.
 */
export const batchRequestSchema = z.array(
  z.union([jsonRpcRequestSchema, jsonRpcNotificationSchema]),
) satisfies ZodType<JSONRPCBatchRequest>;
