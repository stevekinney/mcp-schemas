import { z } from "zod";
import type { LoggingMessageNotification } from "../schema";
import { ZodType } from "zod";
import { notificationSchema } from "./notification";
import { loggingLevelSchema } from "./logging-level";

/**
 * Notification of a log message passed from server to client. If no logging/setLevel request has been sent from the client, the server MAY decide which messages to send automatically.
 */
const loggingMessageNotificationSchemaRaw = notificationSchema.extend({
  method: z.literal("notifications/message"),
  params: z.object({
    /**
     * The severity of this log message.
     */
    level: loggingLevelSchema,
    /**
     * An optional name of the logger issuing this message.
     */
    logger: z.optional(z.string()),
    /**
     * The data to be logged, such as a string message or an object. Any JSON serializable type is allowed here.
     */
    data: z.unknown(),
  }).required(),
});

export const loggingMessageNotificationSchema: ZodType<LoggingMessageNotification> = loggingMessageNotificationSchemaRaw;
