import { z } from "zod";
import type { TextContent } from "../schema";
import type { ZodType } from "zod";
import { annotationsSchema } from "./annotations";

/**
 * Text provided to or from an LLM.
 */
export const textContentSchema = z.object({
  type: z.literal("text"),
  /**
   * The text content of the message.
   */
  text: z.string(),
  /**
   * Optional annotations for the client.
   */
  annotations: z.optional(annotationsSchema),
}) satisfies ZodType<TextContent>;
