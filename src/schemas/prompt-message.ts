import { z } from 'zod';
import type { PromptMessage } from '../schema';
import type { ZodType } from 'zod';
import { roleSchema } from './role';
import { allContentSchemas } from './content-schemas';

/**
 * Describes a message returned as part of a prompt.
 *
 * This is similar to `SamplingMessage`, but also supports the embedding of
 * resources from the MCP server.
 */
export const promptMessageSchema = z.object({
  role: roleSchema,
  content: allContentSchemas,
}) satisfies ZodType<PromptMessage>;
