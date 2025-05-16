import { z } from "zod";
import type { PromptListChangedNotification } from "../schema";
import { ZodType } from "zod";
import { notificationSchema } from "./notification";

/**
 * An optional notification from the server to the client, informing it that the list of prompts it offers has changed. This may be issued by servers without any previous subscription from the client.
 */
export const promptListChangedNotificationSchema = notificationSchema.extend({
  method: z.literal("notifications/prompts/list_changed"),
}) satisfies ZodType<PromptListChangedNotification>;
