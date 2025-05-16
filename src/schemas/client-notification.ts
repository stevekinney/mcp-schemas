import { z } from 'zod';
import type { ClientNotification, JSONRPCNotification } from '../schema';
import { cancelledNotificationSchema } from './cancelled-notification';
import { initializedNotificationSchema } from './initialized-notification';
import { progressNotificationSchema } from './progress-notification';
import { rootsListChangedNotificationSchema } from './roots-list-changed-notification';
import { jsonRpcNotificationSchema } from './jsonrpc-notification';

/**
 * Union of all possible client notifications.
 */
// Explicitly define ClientNotification schema with proper method values
const clientNotificationSchema = jsonRpcNotificationSchema.extend({
  method: z.enum([
    'notifications/cancelled',
    'notifications/progress',
    'notifications/initialized',
    'notifications/roots/list_changed',
  ]),
  params: z.object({}).passthrough().optional(),
});

// Export the schema with correct type
export { clientNotificationSchema };

// Runtime schemas are preserved for validation
const runtimeValidationSchema = z.union([
  cancelledNotificationSchema,
  progressNotificationSchema,
  initializedNotificationSchema,
  rootsListChangedNotificationSchema,
]);

// Add a type guard function for runtime validation
export function isClientNotification(value: unknown): value is ClientNotification & JSONRPCNotification {
  return runtimeValidationSchema.safeParse(value).success;
}
