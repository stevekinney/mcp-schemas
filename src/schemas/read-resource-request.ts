import { z, type ZodType } from "zod";
import type { ReadResourceRequest } from "../schema";
import { withRequest } from "../utilities";
import { uriParam } from "./common-params";

/**
 * Sent from the client to the server, to read a specific resource URI.
 */
export const readResourceRequestSchema = withRequest(
  "resources/read",
  uriParam,
) satisfies ZodType<ReadResourceRequest>;
