import { z, type ZodType } from "zod";
import type { EmbeddedResource } from "../schema";
import { annotationsSchema } from "./annotations";
import { blobResourceContentsSchema } from "./blob-resource-contents";
import { textResourceContentsSchema } from "./text-resource-contents";

/**
 * The contents of a resource, embedded into a prompt or tool call result.
 *
 * It is up to the client how best to render embedded resources for the benefit
 * of the LLM and/or the user.
 */
export const embeddedResourceSchema = z.object({
  type: z.literal("resource"),
  resource: z.union([textResourceContentsSchema, blobResourceContentsSchema]),
  /**
   * Optional annotations for the client.
   */
  annotations: z.optional(annotationsSchema),
}) satisfies ZodType<EmbeddedResource>;
