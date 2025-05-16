import { z, type ZodType } from "zod";
import type { SetLevelRequest } from "../schema";
import { withRequest } from "../utilities";
import { loggingLevelParam } from "./common-params";

/**
 * A request from the client to the server, to enable or adjust logging.
 */
export const setLevelRequestSchema = withRequest(
  "logging/setLevel",
  loggingLevelParam,
) satisfies ZodType<SetLevelRequest>;
