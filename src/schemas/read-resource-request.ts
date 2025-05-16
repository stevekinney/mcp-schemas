import { z } from "zod";
import type { ReadResourceRequest } from "../schema";
import { ZodType } from "zod";
import { requestSchema } from "./request";

/**
 * Sent from the client to the server, to read a specific resource URI.
 */
export const readResourceRequestSchema = requestSchema.extend({
  method: z.literal("resources/read"),
  params: z.object({
    /**
     * The URI of the resource to read. The URI can use any protocol; it is up to the server how to interpret it.
     */
    uri: z.string().url(),
  }),
}) satisfies ZodType<ReadResourceRequest>;
