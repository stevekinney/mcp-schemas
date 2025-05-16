import { z } from "zod";
import type { Prompt } from "../schema";
import type { ZodType } from 'zod';
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

/**
 * Type guard function for validating if a value is a Prompt
 * @param value - The value to check
 * @returns True if the value matches the Prompt schema
 */
export function isPrompt(value: unknown): value is Prompt {
  return promptSchema.safeParse(value).success;
}
