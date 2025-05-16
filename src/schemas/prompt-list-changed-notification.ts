import { z } from 'zod';
import type { PromptListChangedNotification, JSONRPCNotification } from '../schema';
import type { ZodType } from 'zod';
import { jsonRpcNotificationSchema } from './jsonrpc-notification';

/**
 * An optional notification from the server to the client, informing it that the list of prompts it offers has changed. This may be issued by servers without any previous subscription from the client.
 */
export const promptListChangedNotificationSchema = jsonRpcNotificationSchema.extend({
  method: z.literal('notifications/prompts/list_changed'),
}) satisfies ZodType<PromptListChangedNotification & JSONRPCNotification>;
