import { z } from "zod";
import type { ProgressNotification } from "../schema";
import { ZodType } from "zod";
import { notificationSchema } from "./notification";
import { progressTokenSchema } from "./progress-token";

/**
 * An out-of-band notification used to inform the receiver of a progress update for a long-running request.
 */
export const progressNotificationSchema = notificationSchema.extend({
  method: z.literal("notifications/progress"),
  params: z.object({
    /**
     * The progress token which was given in the initial request, used to associate this notification with the request that is proceeding.
     */
    progressToken: progressTokenSchema,
    /**
     * The progress thus far. This should increase every time progress is made, even if the total is unknown.
     */
    progress: z.number(),
    /**
     * Total number of items to process (or total progress required), if known.
     */
    total: z.optional(z.number()),
    /**
     * An optional message describing the current progress.
     */
    message: z.optional(z.string()),
  }),
}) satisfies ZodType<ProgressNotification>;
