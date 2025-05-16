import { z, type ZodType } from "zod";
import type { CallToolResult } from "../schema";
import { audioContentSchema } from "./audio-content";
import { embeddedResourceSchema } from "./embedded-resource";
import { imageContentSchema } from "./image-content";
import { resultSchema } from "./result";
import { textContentSchema } from "./text-content";

/**
 * The server's response to a tool call.
 *
 * Any errors that originate from the tool SHOULD be reported inside the result
 * object, with `isError` set to true, _not_ as an MCP protocol-level error
 * response. Otherwise, the LLM would not be able to see that an error occurred
 * and self-correct.
 *
 * However, any errors in _finding_ the tool, an error indicating that the
 * server does not support tool calls, or any other exceptional conditions,
 * should be reported as an MCP error response.
 */
export const callToolResultSchema = resultSchema.extend({
  content: z.array(
    z.union([
      textContentSchema,
      imageContentSchema,
      audioContentSchema,
      embeddedResourceSchema,
    ]),
  ),
  /**
   * Whether the tool call ended in an error.
   *
   * If not set, this is assumed to be false (the call was successful).
   */
  isError: z.optional(z.boolean()),
}) satisfies ZodType<CallToolResult>;
