import { z } from 'zod';
import type { LoggingMessageNotification, JSONRPCNotification } from '../schema';
import { loggingLevelSchema } from './logging-level';
import { jsonRpcNotificationSchema } from './jsonrpc-notification';

/**
 * Notification of a log message passed from server to client. If no logging/setLevel request has been sent from the client, the server MAY decide which messages to send automatically.
 */
export const loggingMessageNotificationSchema = jsonRpcNotificationSchema.extend({
  method: z.literal('notifications/message'),
  params: z.object({
    /**
     * The severity of this log message.
     */
    level: loggingLevelSchema,
    /**
     * An optional name of the logger issuing this message.
     */
    logger: z.string().optional(),
    /**
     * The data to be logged, such as a string message or an object. Any JSON serializable type is allowed here.
     */
    data: z.union([
      z.string(),
      z.number(),
      z.boolean(),
      z.null(),
      z.object({}).catchall(z.unknown()),
      z.array(z.unknown()),
    ]),
  }),
}) satisfies z.ZodType<LoggingMessageNotification & JSONRPCNotification>;
