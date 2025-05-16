import { z, type ZodType } from "zod";
import type { GetPromptResult } from "../schema";
import { promptMessageSchema } from "./prompt-message";
import { resultSchema } from "./result";

/**
 * The server's response to a prompts/get request from the client.
 */
export const getPromptResultSchema = resultSchema.extend({
  /**
   * An optional description for the prompt.
   */
  description: z.optional(z.string()),
  messages: z.array(promptMessageSchema),
}) satisfies ZodType<GetPromptResult>;
