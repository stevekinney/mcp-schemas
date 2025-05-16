import { z } from "zod";
import type { SamplingMessage } from "../schema";
import { ZodType } from "zod";
import { roleSchema } from "./role";
import { basicContentSchemas } from "./content-schemas";

/**
 * Describes a message issued to or received from an LLM API.
 */
export const samplingMessageSchema = z.object({
  role: roleSchema,
  content: basicContentSchemas,
}) satisfies ZodType<SamplingMessage>;
