import { z, type ZodType } from "zod";
import type { AudioContent } from "../schema";
import { annotationsSchema } from "./annotations";

/**
 * Audio provided to or from an LLM.
 */
export const audioContentSchema = z.object({
  type: z.literal("audio"),
  /**
   * The base64-encoded audio data.
   */
  data: z.string(),
  /**
   * The MIME type of the audio. Different providers may support different audio types.
   */
  mimeType: z.string(),
  /**
   * Optional annotations for the client.
   */
  annotations: z.optional(annotationsSchema),
}) satisfies ZodType<AudioContent>;
