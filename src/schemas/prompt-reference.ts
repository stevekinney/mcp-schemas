import { z } from 'zod';
import type { PromptReference } from '../schema';
import type { ZodType } from 'zod';

/**
 * Identifies a prompt.
 */
export const promptReferenceSchema = z.object({
  type: z.literal('ref/prompt'),
  /**
   * The name of the prompt or prompt template
   */
  name: z.string(),
}) satisfies ZodType<PromptReference>;
