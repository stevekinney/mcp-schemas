import { z } from 'zod';
import type { ListResourceTemplatesResult } from '../schema';
import type { ZodType } from 'zod';
import { paginatedResultSchema } from './paginated-result';
import { resourceTemplateSchema } from './resource-template';

/**
 * The server's response to a resources/templates/list request from the client.
 */
export const listResourceTemplatesResultSchema = paginatedResultSchema.extend({
  resourceTemplates: z.array(resourceTemplateSchema),
}) satisfies ZodType<ListResourceTemplatesResult>;
