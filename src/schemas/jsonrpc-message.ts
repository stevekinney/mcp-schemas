import type { ZodType } from 'zod';
import { z } from 'zod';
import type { JSONRPCMessage } from '../schema';
import { jsonRpcBatchRequestSchema } from './jsonrpc-batch-request';
import { jsonRpcBatchResponseSchema } from './jsonrpc-batch-response';
import { jsonRpcErrorSchema } from './jsonrpc-error';
import { jsonRpcNotificationSchema } from './jsonrpc-notification';
import { jsonRpcRequestSchema } from './jsonrpc-request';
import { jsonRpcResponseSchema } from './jsonrpc-response';

/**
 * Refers to any valid JSON-RPC object that can be decoded off the wire, or encoded to be sent.
 */
export const jsonRpcMessageSchema = z.union([
  jsonRpcRequestSchema,
  jsonRpcNotificationSchema,
  jsonRpcBatchRequestSchema,
  jsonRpcResponseSchema,
  jsonRpcErrorSchema,
  jsonRpcBatchResponseSchema,
]) satisfies ZodType<JSONRPCMessage>;
