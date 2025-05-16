import { z, type ZodType } from "zod";
import type { ClientCapabilities } from "../schema";
import { unknownObjectSchema } from "./common-params";

/**
 * Capabilities a client may support. Known capabilities are defined here, in this schema, but this is not a closed set: any client can define its own, additional capabilities.
 */
export const clientCapabilitiesSchema = z.object({
  /**
   * Experimental, non-standard capabilities that the client supports.
   */
  experimental: z.optional(z.record(z.string(), unknownObjectSchema)),
  /**
   * Present if the client supports listing roots.
   */
  roots: z.optional(
    z.object({
      /**
       * Whether the client supports notifications for changes to the roots list.
       */
      listChanged: z.optional(z.boolean()),
    }),
  ),
  /**
   * Present if the client supports sampling from an LLM.
   */
  sampling: z.optional(unknownObjectSchema),
}) satisfies ZodType<ClientCapabilities>;
