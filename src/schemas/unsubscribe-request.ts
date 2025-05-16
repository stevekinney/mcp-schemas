import { z } from 'zod';
import type { UnsubscribeRequest, JSONRPCRequest } from '../schema';
import type { ZodType } from 'zod';
import { jsonRpcRequestSchema } from './jsonrpc-request';

/**
 * Sent from the client to request cancellation of resources/updated notifications from the server. This should follow a previous resources/subscribe request.
 */
export const unsubscribeRequestSchema = jsonRpcRequestSchema.extend({
  method: z.literal('resources/unsubscribe'),
  params: z.object({
    /**
     * The URI of the resource to unsubscribe from.
     */
    uri: z.string().url(),
  }),
}) satisfies ZodType<UnsubscribeRequest & JSONRPCRequest>;
