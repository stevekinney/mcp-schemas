import { z, type ZodType } from 'zod';
import type { CallToolRequest } from '../schema';
import { requestSchema } from './request';

/**
 * Used by the client to invoke a tool provided by the server.
 */
export const callToolRequestSchema = requestSchema.extend({
  method: z.literal('tools/call'),
  params: z.object({
    name: z.string(),
    arguments: z.optional(z.record(z.string(), z.unknown())),
  }),
}) satisfies ZodType<CallToolRequest>;
