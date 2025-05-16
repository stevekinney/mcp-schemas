import { z } from 'zod';
import type { PaginatedRequest } from '../schema';
import type { ZodType } from 'zod';
import { requestSchema } from './request';
import { cursorSchema } from './cursor';

/**
 * A request that supports pagination.
 */
export const paginatedRequestSchema = requestSchema.extend({
  params: z.optional(
    z
      .object({
        /**
         * An opaque token representing the current pagination position.
         * If provided, the server should return results starting after this cursor.
         */
        cursor: z.optional(cursorSchema),
        _meta: z.optional(z.object({}).catchall(z.unknown())),
      })
      .catchall(z.unknown()),
  ),
}) satisfies ZodType<PaginatedRequest>;
