import { z } from 'zod';
import type { Notification } from '../schema';

/**
 * Defines a basic notification object in the MCP protocol.
 */
export const notificationSchema = z.object({
  method: z.string(),
  params: z.optional(
    z
      .object({
        /**
         * This parameter name is reserved by MCP to allow clients and servers to attach additional metadata to their notifications.
         */
        _meta: z.optional(z.record(z.string(), z.unknown())),
      })
      .catchall(z.unknown()),
  ),
}) satisfies z.ZodType<Notification>;
