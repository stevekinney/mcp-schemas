import { z, type ZodType } from "zod";
import type { CancelledNotification } from "../schema";
import { notificationSchema } from "./notification";
import { requestIdSchema } from "./request-id";

/**
 * This notification can be sent by either side to indicate that it is cancelling a previously-issued request.
 *
 * The request SHOULD still be in-flight, but due to communication latency, it is always possible that this notification MAY arrive after the request has already finished.
 *
 * This notification indicates that the result will be unused, so any associated processing SHOULD cease.
 *
 * A client MUST NOT attempt to cancel its `initialize` request.
 */
export const cancelledNotificationSchema = notificationSchema.extend({
  method: z.literal("notifications/cancelled"),
  params: z.object({
    /**
     * The ID of the request to cancel.
     *
     * This MUST correspond to the ID of a request previously issued in the same direction.
     */
    requestId: requestIdSchema,
    /**
     * An optional string describing the reason for the cancellation. This MAY be logged or presented to the user.
     */
    reason: z.optional(z.string()),
  }),
}) satisfies ZodType<CancelledNotification>;
