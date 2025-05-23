import { z } from 'zod';
import type { ResourceUpdatedNotification, JSONRPCNotification } from '../schema';
import type { ZodType } from 'zod';
import { jsonRpcNotificationSchema } from './jsonrpc-notification';

/**
 * A notification from the server to the client, informing it that a resource has changed and may need to be read again. This should only be sent if the client previously sent a resources/subscribe request.
 */
export const resourceUpdatedNotificationSchema = jsonRpcNotificationSchema.extend({
  method: z.literal('notifications/resources/updated'),
  params: z.object({
    /**
     * The URI of the resource that has been updated. This might be a sub-resource of the one that the client actually subscribed to.
     */
    uri: z.string().url(),
  }),
}) satisfies ZodType<ResourceUpdatedNotification & JSONRPCNotification>;
