import { z } from "zod";
import type { ClientNotification } from "../schema";
import { ZodType } from "zod";
import { allClientNotifications } from "./schema-registry";

/**
 * Union of all possible client notifications.
 */
export const clientNotificationSchema = z.union(
  allClientNotifications,
) satisfies ZodType<ClientNotification>;
