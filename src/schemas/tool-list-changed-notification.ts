import { z } from 'zod';
import type { ToolListChangedNotification, JSONRPCNotification } from '../schema';
import type { ZodType } from 'zod';
import { jsonRpcNotificationSchema } from './jsonrpc-notification';

/**
 * An optional notification from the server to the client, informing it that the list of tools it offers has changed. This may be issued by servers without any previous subscription from the client.
 */
export const toolListChangedNotificationSchema = jsonRpcNotificationSchema.extend({
  method: z.literal('notifications/tools/list_changed'),
}) satisfies ZodType<ToolListChangedNotification & JSONRPCNotification>;
