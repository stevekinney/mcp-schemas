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
export const clientNotificationSchema = z.union([
  cancelledNotificationSchema,
  progressNotificationSchema,
  initializedNotificationSchema,
  rootsListChangedNotificationSchema,
]) satisfies ZodType<ClientNotification>;
