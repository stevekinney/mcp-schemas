import { z } from "zod";
import type { SamplingMessage } from "../schema";
import { ZodType } from "zod";
import { roleSchema } from "./role";
import { textContentSchema } from "./text-content";
import { imageContentSchema } from "./image-content";
import { audioContentSchema } from "./audio-content";

/**
 * Describes a message issued to or received from an LLM API.
 */
export const samplingMessageSchema = z.object({
  role: roleSchema,
  content: z.union([textContentSchema, imageContentSchema, audioContentSchema]),
}) satisfies ZodType<SamplingMessage>;
