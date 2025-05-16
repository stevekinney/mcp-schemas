import { z } from "zod";
import type { InitializedNotification } from "../schema";
import type { ZodType } from 'zod';
import { notificationSchema } from "./notification";

/**
 * This notification is sent from the client to the server after initialization has finished.
 */
export const initializedNotificationSchema = notificationSchema.extend({
  method: z.literal("notifications/initialized"),
}) satisfies ZodType<InitializedNotification>;
