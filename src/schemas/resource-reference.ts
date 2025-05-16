import { z } from "zod";
import type { ResourceReference } from "../schema";
import { ZodType } from "zod";

/**
 * A reference to a resource or resource template definition.
 */
export const resourceReferenceSchema = z.object({
  type: z.literal("ref/resource"),
  /**
   * The URI or URI template of the resource.
   */
  uri: z.string(),
}) satisfies ZodType<ResourceReference>;
