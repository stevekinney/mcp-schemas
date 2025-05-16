import type { ZodType } from 'zod';
import { z } from 'zod';
import type { JSONRPCMessage } from '../schema';
import { batchRequestSchema } from './jsonrpc-batch-request';
import { batchResponseSchema } from './jsonrpc-batch-response';
import { errorSchema } from './jsonrpc-error';
import { jsonRpcNotificationSchema } from './jsonrpc-notification';
import { jsonRpcRequestSchema } from './jsonrpc-request';
import { jsonRpcResponseSchema } from './jsonrpc-response';

/**
 * Refers to any valid JSON-RPC object that can be decoded off the wire, or encoded to be sent.
 */
export const jsonRpcMessageSchema = z.union([
  jsonRpcRequestSchema,
  jsonRpcNotificationSchema,
  batchRequestSchema,
  jsonRpcResponseSchema,
  errorSchema,
  batchResponseSchema,
]) satisfies ZodType<JSONRPCMessage>;
