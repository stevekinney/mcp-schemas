import { z } from "zod";
import type { LoggingMessageNotification } from "../schema";
import { loggingLevelSchema } from "./logging-level";

/**
 * Notification of a log message passed from server to client. If no logging/setLevel request has been sent from the client, the server MAY decide which messages to send automatically.
 */
// Create direct schema for runtime validation
const loggingMessageNotificationRuntimeSchema = z.object({
  method: z.literal("notifications/message"),
  params: z
    .object({
      level: loggingLevelSchema,
      logger: z.optional(z.string()),
      data: z.unknown(),
    })
    .strict(),
});

// This type approximation ensures compatibility with LoggingMessageNotification
export const loggingMessageNotificationSchema = z.object({
  method: z.literal("notifications/message"),
  params: z.object({
    level: loggingLevelSchema,
    logger: z.optional(z.string()),
    data: z.unknown(),
  }),
});
