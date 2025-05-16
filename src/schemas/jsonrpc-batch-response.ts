import { z } from "zod";
import type { JSONRPCBatchResponse } from "../schema";
import type { ZodType } from 'zod';
import { jsonrpcResponseSchema } from "./jsonrpc-response";
import { jsonrpcErrorSchema } from "./jsonrpc-error";

/**
 * A JSON-RPC batch response, as described in https://www.jsonrpc.org/specification#batch.
 */
export const jsonrpcBatchResponseSchema = z.array(
  z.union([jsonrpcResponseSchema, jsonrpcErrorSchema]),
) satisfies ZodType<JSONRPCBatchResponse>;
