import { z } from "zod";
import type { PromptMessage } from "../schema";
import { ZodType } from "zod";
import { roleSchema } from "./role";
import { textContentSchema } from "./text-content";
import { imageContentSchema } from "./image-content";
import { audioContentSchema } from "./audio-content";
import { embeddedResourceSchema } from "./embedded-resource";

/**
 * Describes a message returned as part of a prompt.
 *
 * This is similar to `SamplingMessage`, but also supports the embedding of
 * resources from the MCP server.
 */
export const promptMessageSchema = z.object({
  role: roleSchema,
  content: z.union([
    textContentSchema,
    imageContentSchema,
    audioContentSchema,
    embeddedResourceSchema,
  ]),
}) satisfies ZodType<PromptMessage>;
