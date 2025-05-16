import { z } from "zod";
import type { Request } from "../schema";
import { ZodType } from "zod";
import { progressTokenSchema } from "./progress-token";

/**
 * Defines a basic request object in the MCP protocol.
 */
export const requestSchema = z.object({
  method: z.string(),
  params: z.optional(
    z
      .object({
        _meta: z.optional(
          z
            .object({
              /**
               * If specified, the caller is requesting out-of-band progress notifications for this request (as represented by notifications/progress). The value of this parameter is an opaque token that will be attached to any subsequent notifications. The receiver is not obligated to provide these notifications.
               */
              progressToken: z.optional(progressTokenSchema),
            })
            .strict(),
        ),
      })
      .catchall(z.unknown()),
  ),
}) satisfies ZodType<Request>;
