import { z } from "zod";
import type { JSONRPCNotification } from "../schema";
import { JSONRPC_VERSION } from "../schema";
import { ZodType } from "zod";
import { notificationSchema } from "./notification";
import { JSONRPC_VERSION_SCHEMA } from "./constants";

/**
 * A notification which does not expect a response.
 */
export const jsonrpcNotificationSchema = notificationSchema.extend({
  jsonrpc: JSONRPC_VERSION_SCHEMA,
}) satisfies ZodType<JSONRPCNotification>;
