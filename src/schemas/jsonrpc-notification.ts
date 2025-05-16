import type { ZodType } from 'zod';
import type { JSONRPCNotification } from '../schema';
import { JSONRPC_VERSION_SCHEMA } from './constants';
import { notificationSchema } from './notification';

/**
 * A notification which does not expect a response.
 */
export const jsonrpcNotificationSchema = notificationSchema.extend({
  jsonrpc: JSONRPC_VERSION_SCHEMA,
}) satisfies ZodType<JSONRPCNotification>;
