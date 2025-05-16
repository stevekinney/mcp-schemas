import { z } from "zod";
import type { GetPromptResult } from "../schema";
import { ZodType } from "zod";
import { resultSchema } from "./result";
import { promptMessageSchema } from "./prompt-message";

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
