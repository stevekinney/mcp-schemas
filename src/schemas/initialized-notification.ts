import { z } from 'zod';
import type { InitializedNotification, JSONRPCNotification } from '../schema';
import type { ZodType } from 'zod';
import { jsonRpcNotificationSchema } from './jsonrpc-notification';

/**
 * This notification is sent from the client to the server after initialization has finished.
 */
export const initializedNotificationSchema = jsonRpcNotificationSchema.extend({
  method: z.literal('notifications/initialized'),
}) satisfies ZodType<InitializedNotification & JSONRPCNotification>;
