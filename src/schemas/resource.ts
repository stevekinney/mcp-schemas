import { z } from "zod";
import type { Resource } from "../schema";
import { ZodType } from "zod";
import { annotationsSchema } from "./annotations";

/**
 * A known resource that the server is capable of reading.
 */
export const resourceSchema = z.object({
  /**
   * The URI of this resource.
   */
  uri: z.string().url(),
  /**
   * A human-readable name for this resource.
   *
   * This can be used by clients to populate UI elements.
   */
  name: z.string(),
  /**
   * A description of what this resource represents.
   *
   * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
   */
  description: z.optional(z.string()),
  /**
   * The MIME type of this resource, if known.
   */
  mimeType: z.optional(z.string()),
  /**
   * Optional annotations for the client.
   */
  annotations: z.optional(annotationsSchema),
  /**
   * The size of the raw resource content, in bytes (i.e., before base64 encoding or any tokenization), if known.
   *
   * This can be used by Hosts to display file sizes and estimate context window usage.
   */
  size: z.optional(z.number()),
}) satisfies ZodType<Resource>;
