import { z } from 'zod';
import type { ListPromptsRequest, JSONRPCRequest } from '../schema';
import type { ZodType } from 'zod';
import { paginatedRequestSchema } from './paginated-request';

/**
 * Sent from the client to request a list of prompts and prompt templates the server has.
 */
export const listPromptsRequestSchema = paginatedRequestSchema.extend({
  method: z.literal('prompts/list'),
}) satisfies ZodType<ListPromptsRequest & JSONRPCRequest>;
