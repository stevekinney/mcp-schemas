import { z } from "zod";
import type { JSONRPCBatchRequest } from "../schema";
import { ZodType } from "zod";
import { jsonrpcRequestSchema } from "./jsonrpc-request";
import { jsonrpcNotificationSchema } from "./jsonrpc-notification";

/**
 * A JSON-RPC batch request, as described in https://www.jsonrpc.org/specification#batch.
 */
export const jsonrpcBatchRequestSchema = z.array(
  z.union([jsonrpcRequestSchema, jsonrpcNotificationSchema]),
) satisfies ZodType<JSONRPCBatchRequest>;
