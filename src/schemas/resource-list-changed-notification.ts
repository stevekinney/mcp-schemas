import { z } from 'zod';
import type { ResourceListChangedNotification } from '../schema';
import type { ZodType } from 'zod';
import { notificationSchema } from './notification';

/**
 * An optional notification from the server to the client, informing it that the list of resources it can read from has changed. This may be issued by servers without any previous subscription from the client.
 */
export const resourceListChangedNotificationSchema = notificationSchema.extend({
  method: z.literal('notifications/resources/list_changed'),
}) satisfies ZodType<ResourceListChangedNotification>;
