import { z } from 'zod';
import type { RootsListChangedNotification, JSONRPCNotification } from '../schema';
import type { ZodType } from 'zod';
import { jsonRpcNotificationSchema } from './jsonrpc-notification';

/**
 * A notification from the client to the server, informing it that the list of roots has changed.
 * This notification should be sent whenever the client adds, removes, or modifies any root.
 * The server should then request an updated list of roots using the ListRootsRequest.
 */
export const rootsListChangedNotificationSchema = jsonRpcNotificationSchema.extend({
  method: z.literal('notifications/roots/list_changed'),
}) satisfies ZodType<RootsListChangedNotification & JSONRPCNotification>;
