import { z } from "zod";
import type { Implementation } from "../schema";
import { ZodType } from "zod";

/**
 * Describes the name and version of an MCP implementation.
 */
export const implementationSchema = z.object({
  name: z.string(),
  version: z.string(),
}) satisfies ZodType<Implementation>;
