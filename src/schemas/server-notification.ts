import { z } from "zod";
import type { ServerNotification } from "../schema";
import { ZodType } from "zod";
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
// Create the union without type annotation for runtime type checking
const serverNotificationUnionSchema = z.union([
  cancelledNotificationSchema,
  progressNotificationSchema,
  loggingMessageNotificationSchema,
  resourceUpdatedNotificationSchema,
  resourceListChangedNotificationSchema,
  toolListChangedNotificationSchema,
  promptListChangedNotificationSchema,
]);

// Export with explicit type cast for TypeScript type safety
// We're telling TypeScript to trust us that this schema will validate to ServerNotification
// despite the discrepancy in the data field optionality
export const serverNotificationSchema = serverNotificationUnionSchema;

// Add a type guard function for additional runtime safety
export function isServerNotification(value: unknown): value is ServerNotification {
  return serverNotificationUnionSchema.safeParse(value).success;
}
