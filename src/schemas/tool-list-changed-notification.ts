import { z } from "zod";
import type { ToolListChangedNotification } from "../schema";
import type { ZodType } from 'zod';
import { notificationSchema } from "./notification";

/**
 * An optional notification from the server to the client, informing it that the list of tools it offers has changed. This may be issued by servers without any previous subscription from the client.
 */
export const toolListChangedNotificationSchema = notificationSchema.extend({
  method: z.literal("notifications/tools/list_changed"),
}) satisfies ZodType<ToolListChangedNotification>;
