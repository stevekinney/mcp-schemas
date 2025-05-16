import { z } from "zod";
import type { ServerRequest } from "../schema";
import { ZodType } from "zod";
import { pingRequestSchema } from "./ping-request";
import { createMessageRequestSchema } from "./create-message-request";
import { listRootsRequestSchema } from "./list-roots-request";

/**
 * Union of all possible server requests.
 */
// Create the union for runtime validation
const serverRequestUnionSchema = z.union([
  pingRequestSchema,
  createMessageRequestSchema,
  listRootsRequestSchema,
]);

// Export the union schema
export const serverRequestSchema = serverRequestUnionSchema;

// Add a type guard function for runtime validation
export function isServerRequest(value: unknown): value is ServerRequest {
  return serverRequestUnionSchema.safeParse(value).success;
}
