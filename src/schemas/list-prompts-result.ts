import { z } from 'zod';
import type { ListPromptsResult } from '../schema';
import type { ZodType } from 'zod';
import { paginatedResultSchema } from './paginated-result';
import { promptSchema } from './prompt';

/**
 * The server's response to a prompts/list request from the client.
 */
export const listPromptsResultSchema = paginatedResultSchema.extend({
  prompts: z.array(promptSchema),
}) satisfies ZodType<ListPromptsResult>;
