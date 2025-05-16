import { z } from "zod";
import type { ClientNotification } from "../schema";
import { ZodType } from "zod";
import { cancelledNotificationSchema } from "./cancelled-notification";
import { progressNotificationSchema } from "./progress-notification";
import { initializedNotificationSchema } from "./initialized-notification";
import { rootsListChangedNotificationSchema } from "./roots-list-changed-notification";

/**
 * Union of all possible client notifications.
 */
// Create the union for runtime validation
const clientNotificationUnionSchema = z.union([
  cancelledNotificationSchema,
  progressNotificationSchema,
  initializedNotificationSchema,
  rootsListChangedNotificationSchema,
]);

// Export the union schema
export const clientNotificationSchema = clientNotificationUnionSchema;

// Add a type guard function for runtime validation
export function isClientNotification(value: unknown): value is ClientNotification {
  return clientNotificationUnionSchema.safeParse(value).success;
}
