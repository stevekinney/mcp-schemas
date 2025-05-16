import { z } from "zod";
import type { Prompt } from "../schema";
import { ZodType } from "zod";
import { promptArgumentSchema } from "./prompt-argument";

/**
 * A prompt or prompt template that the server offers.
 */
export const promptSchema = z.object({
  /**
   * The name of the prompt or prompt template.
   */
  name: z.string(),
  /**
   * An optional description of what this prompt provides
   */
  description: z.optional(z.string()),
  /**
   * A list of arguments to use for templating the prompt.
   */
  arguments: z.optional(z.array(promptArgumentSchema)),
}) satisfies ZodType<Prompt>;
