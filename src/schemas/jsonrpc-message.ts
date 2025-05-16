import { z } from "zod";
import type { JSONRPCMessage } from "../schema";
import type { ZodType } from "zod";
import { jsonrpcRequestSchema } from "./jsonrpc-request";
import { jsonrpcNotificationSchema } from "./jsonrpc-notification";
import { jsonrpcBatchRequestSchema } from "./jsonrpc-batch-request";
import { jsonrpcResponseSchema } from "./jsonrpc-response";
import { jsonrpcErrorSchema } from "./jsonrpc-error";
import { jsonrpcBatchResponseSchema } from "./jsonrpc-batch-response";

/**
 * Refers to any valid JSON-RPC object that can be decoded off the wire, or encoded to be sent.
 */
export const jsonrpcMessageSchema = z.union([
  jsonrpcRequestSchema,
  jsonrpcNotificationSchema,
  jsonrpcBatchRequestSchema,
  jsonrpcResponseSchema,
  jsonrpcErrorSchema,
  jsonrpcBatchResponseSchema,
]) satisfies ZodType<JSONRPCMessage>;
