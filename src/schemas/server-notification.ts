import { z } from "zod";
import type { ServerNotification } from "../schema";
import { cancelledNotificationSchema } from "./cancelled-notification";
import { progressNotificationSchema } from "./progress-notification";
import { loggingMessageNotificationSchema } from "./logging-message-notification";
import { resourceUpdatedNotificationSchema } from "./resource-updated-notification";
import { resourceListChangedNotificationSchema } from "./resource-list-changed-notification";
import { toolListChangedNotificationSchema } from "./tool-list-changed-notification";
import { promptListChangedNotificationSchema } from "./prompt-list-changed-notification";

/**
 * Union of all possible server notifications.
 */
// Explicitly define ServerNotification schema with proper method values
const serverNotificationSchema = z.object({
  method: z.enum([
    "notifications/cancelled", 
    "notifications/progress", 
    "notifications/message", 
    "notifications/resources/updated", 
    "notifications/resources/list_changed", 
    "notifications/tools/list_changed", 
    "notifications/prompts/list_changed"
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
export function isServerNotification(value: unknown): value is ServerNotification {
  return runtimeValidationSchema.safeParse(value).success;
}
