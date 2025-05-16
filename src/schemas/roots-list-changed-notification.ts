import { z } from "zod";
import type { RootsListChangedNotification } from "../schema";
import { ZodType } from "zod";
import { notificationSchema } from "./notification";

/**
 * A notification from the client to the server, informing it that the list of roots has changed.
 * This notification should be sent whenever the client adds, removes, or modifies any root.
 * The server should then request an updated list of roots using the ListRootsRequest.
 */
export const rootsListChangedNotificationSchema = notificationSchema.extend({
  method: z.literal("notifications/roots/list_changed"),
}) satisfies ZodType<RootsListChangedNotification>;
