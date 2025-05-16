import { z } from 'zod';
import type { ServerNotification, JSONRPCNotification } from '../schema';
import { cancelledNotificationSchema } from './cancelled-notification';
import { loggingMessageNotificationSchema } from './logging-message-notification';
import { progressNotificationSchema } from './progress-notification';
import { promptListChangedNotificationSchema } from './prompt-list-changed-notification';
import { resourceListChangedNotificationSchema } from './resource-list-changed-notification';
import { resourceUpdatedNotificationSchema } from './resource-updated-notification';
import { toolListChangedNotificationSchema } from './tool-list-changed-notification';
import { jsonRpcNotificationSchema } from './jsonrpc-notification';

/**
 * Union of all possible server notifications.
 */
// Explicitly define ServerNotification schema with proper method values
const serverNotificationSchema = jsonRpcNotificationSchema.extend({
  method: z.enum([
    'notifications/cancelled',
    'notifications/progress',
    'notifications/message',
    'notifications/resources/updated',
    'notifications/resources/list_changed',
    'notifications/tools/list_changed',
    'notifications/prompts/list_changed',
    'notifications/example',
  ]),
  params: z.object({}).passthrough(),
});

// Export the schema with correct type
export { serverNotificationSchema };

// Runtime schemas are preserved for validation
const runtimeValidationSchema = z.union([
  cancelledNotificationSchema,
  progressNotificationSchema,
  loggingMessageNotificationSchema,
  resourceUpdatedNotificationSchema,
  resourceListChangedNotificationSchema,
  toolListChangedNotificationSchema,
  promptListChangedNotificationSchema,
]);

// Add a type guard function for runtime validation
export function isServerNotification(value: unknown): value is ServerNotification & JSONRPCNotification {
  return runtimeValidationSchema.safeParse(value).success;
}
