import { z } from "zod";
import type { JSONRPCResponse } from "../schema";
import { ZodType } from "zod";
import { requestIdSchema } from "./request-id";
import { resultSchema } from "./result";
import { JSONRPC_VERSION_SCHEMA } from "./constants";

/**
 * A successful (non-error) response to a request.
 */
export const jsonrpcResponseSchema = z.object({
  jsonrpc: JSONRPC_VERSION_SCHEMA,
  id: requestIdSchema,
  result: resultSchema,
}) satisfies ZodType<JSONRPCResponse>;
