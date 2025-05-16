import { z } from "zod";
import type { ClientResult } from "../schema";
import { ZodType } from "zod";
import { emptyResultSchema } from "./empty-result";
import { createMessageResultSchema } from "./create-message-result";
import { listRootsResultSchema } from "./list-roots-result";

/**
 * Union of all possible client results.
 */
export const clientResultSchema = z.union([
  emptyResultSchema,
  createMessageResultSchema,
  listRootsResultSchema,
]) satisfies ZodType<ClientResult>;
