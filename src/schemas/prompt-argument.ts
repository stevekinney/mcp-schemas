import { z } from "zod";
import type { PromptArgument } from "../schema";
import type { ZodType } from "zod";

/**
 * Describes an argument that a prompt can accept.
 */
export const promptArgumentSchema = z.object({
  /**
   * The name of the argument.
   */
  name: z.string(),
  /**
   * A human-readable description of the argument.
   */
  description: z.optional(z.string()),
  /**
   * Whether this argument must be provided.
   */
  required: z.optional(z.boolean()),
}) satisfies ZodType<PromptArgument>;
