import { z } from "zod";
import type { SetLevelRequest } from "../schema";
import { ZodType } from "zod";
import { withRequest } from "./utils";
import { loggingLevelParam } from "./common-params";

/**
 * A request from the client to the server, to enable or adjust logging.
 */
export const setLevelRequestSchema = withRequest(
  "logging/setLevel",
  loggingLevelParam,
) satisfies ZodType<SetLevelRequest>;
