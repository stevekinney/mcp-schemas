import { z } from "zod";
import type { ResourceContents } from "../schema";
import type { ZodType } from "zod";

/**
 * The contents of a specific resource or sub-resource.
 */
export const resourceContentsSchema = z.object({
  /**
   * The URI of this resource.
   */
  uri: z.string().url(),
  /**
   * The MIME type of this resource, if known.
   */
  mimeType: z.optional(z.string()),
}) satisfies ZodType<ResourceContents>;
