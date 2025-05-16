import { z } from "zod";
import type { ListRootsResult } from "../schema";
import type { ZodType } from "zod";
import { resultSchema } from "./result";
import { rootSchema } from "./root";

/**
 * The client's response to a roots/list request from the server.
 * This result contains an array of Root objects, each representing a root directory
 * or file that the server can operate on.
 */
export const listRootsResultSchema = resultSchema.extend({
  roots: z.array(rootSchema),
}) satisfies ZodType<ListRootsResult>;
