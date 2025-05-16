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
export const serverNotificationSchema: ZodType<ServerNotification> = z.union([
  cancelledNotificationSchema,
  progressNotificationSchema,
  loggingMessageNotificationSchema,
  resourceUpdatedNotificationSchema,
  resourceListChangedNotificationSchema,
  toolListChangedNotificationSchema,
  promptListChangedNotificationSchema,
]);
