import { z } from 'zod';
import type { ResourceListChangedNotification, JSONRPCNotification } from '../schema';
import type { ZodType } from 'zod';
import { jsonRpcNotificationSchema } from './jsonrpc-notification';

/**
 * An optional notification from the server to the client, informing it that the list of resources it can read from has changed. This may be issued by servers without any previous subscription from the client.
 */
export const resourceListChangedNotificationSchema = jsonRpcNotificationSchema.extend({
  method: z.literal('notifications/resources/list_changed'),
}) satisfies ZodType<ResourceListChangedNotification & JSONRPCNotification>;
