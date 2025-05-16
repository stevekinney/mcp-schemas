import { z } from "zod";
import type { ServerRequest } from "../schema";
import { ZodType } from "zod";
import { pingRequestSchema } from "./ping-request";
import { createMessageRequestSchema } from "./create-message-request";
import { listRootsRequestSchema } from "./list-roots-request";

/**
 * Union of all possible server requests.
 */
export const serverRequestSchema = z.union([
  pingRequestSchema,
  createMessageRequestSchema,
  listRootsRequestSchema,
]) satisfies ZodType<ServerRequest>;
