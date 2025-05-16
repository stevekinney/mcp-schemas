import { z } from "zod";
import type { ResourceTemplate } from "../schema";
import type { ZodType } from "zod";
import { annotationsSchema } from "./annotations";

/**
 * A template description for resources available on the server.
 */
export const resourceTemplateSchema = z.object({
  /**
   * A URI template (according to RFC 6570) that can be used to construct resource URIs.
   */
  uriTemplate: z.string(),
  /**
   * A human-readable name for the type of resource this template refers to.
   *
   * This can be used by clients to populate UI elements.
   */
  name: z.string(),
  /**
   * A description of what this template is for.
   *
   * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
   */
  description: z.optional(z.string()),
  /**
   * The MIME type for all resources that match this template. This should only be included if all resources matching this template have the same type.
   */
  mimeType: z.optional(z.string()),
  /**
   * Optional annotations for the client.
   */
  annotations: z.optional(annotationsSchema),
}) satisfies ZodType<ResourceTemplate>;
