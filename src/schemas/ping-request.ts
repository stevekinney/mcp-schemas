import { z } from "zod";
import type { PingRequest } from "../schema";
import { ZodType } from "zod";
import { requestSchema } from "./request";

/**
 * A ping, issued by either the server or the client, to check that the other party is still alive. The receiver must promptly respond, or else may be disconnected.
 */
export const pingRequestSchema = requestSchema.extend({
  method: z.literal("ping"),
}) satisfies ZodType<PingRequest>;
