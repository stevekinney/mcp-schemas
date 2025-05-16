import { z } from 'zod';
import type { SubscribeRequest } from '../schema';
import type { ZodType } from 'zod';
import { requestSchema } from './request';

/**
 * Sent from the client to request resources/updated notifications from the server whenever a particular resource changes.
 */
export const subscribeRequestSchema = requestSchema.extend({
  method: z.literal('resources/subscribe'),
  params: z.object({
    /**
     * The URI of the resource to subscribe to. The URI can use any protocol; it is up to the server how to interpret it.
     */
    uri: z.string().url(),
  }),
}) satisfies ZodType<SubscribeRequest>;
