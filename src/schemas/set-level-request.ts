import { z } from "zod";
import type { SetLevelRequest } from "../schema";
import { ZodType } from "zod";
import { withRequest } from "./utils";
import { loggingLevelSchema } from "./logging-level";

/**
 * A request from the client to the server, to enable or adjust logging.
 */
export const setLevelRequestSchema = withRequest("logging/setLevel", {
  /**
   * The level of logging that the client wants to receive from the server. The server should send all logs at this level and higher (i.e., more severe) to the client as notifications/message.
   */
  level: loggingLevelSchema,
}) satisfies ZodType<SetLevelRequest>;
