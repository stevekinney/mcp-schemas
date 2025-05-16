import { z } from "zod";
import type { ListRootsRequest } from "../schema";
import type { ZodType } from 'zod';
import { requestSchema } from "./request";

/**
 * Sent from the server to request a list of root URIs from the client. Roots allow
 * servers to ask for specific directories or files to operate on. A common example
 * for roots is providing a set of repositories or directories a server should operate
 * on.
 *
 * This request is typically used when the server needs to understand the file system
 * structure or access specific locations that the client has permission to read from.
 */
export const listRootsRequestSchema = requestSchema.extend({
  method: z.literal("roots/list"),
}) satisfies ZodType<ListRootsRequest>;
