import { z } from 'zod';
import type { ListResourceTemplatesRequest, JSONRPCRequest } from '../schema';
import type { ZodType } from 'zod';
import { paginatedRequestSchema } from './paginated-request';

/**
 * Sent from the client to request a list of resource templates the server has.
 */
export const listResourceTemplatesRequestSchema = paginatedRequestSchema.extend({
  method: z.literal('resources/templates/list'),
}) satisfies ZodType<ListResourceTemplatesRequest & JSONRPCRequest>;
