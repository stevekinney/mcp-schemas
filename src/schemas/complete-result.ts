import { z, type ZodType } from 'zod';
import type { CompleteResult, JSONRPCResponse } from '../schema';
import { jsonRpcResponseSchema } from './jsonrpc-response';

/**
 * The server's response to a completion/complete request
 */
export const completeResultSchema = jsonRpcResponseSchema.extend({
  completion: z.object({
    /**
     * An array of completion values. Must not exceed 100 items.
     */
    values: z.array(z.string()),
    /**
     * The total number of completion options available. This can exceed the number of values actually sent in the response.
     */
    total: z.optional(z.number()),
    /**
     * Indicates whether there are additional completion options beyond those provided in the current response, even if the exact total is unknown.
     */
    hasMore: z.optional(z.boolean()),
  }),
}) satisfies ZodType<CompleteResult & JSONRPCResponse>;
