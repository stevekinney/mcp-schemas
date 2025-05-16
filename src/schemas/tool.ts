import { z } from 'zod';
import type { Tool } from '../schema';
import type { ZodType } from 'zod';
import { toolAnnotationsSchema } from './tool-annotations';

/**
 * Definition for a tool the client can call.
 */
export const toolSchema = z.object({
  /**
   * The name of the tool.
   */
  name: z.string(),
  /**
   * A human-readable description of the tool.
   *
   * This can be used by clients to improve the LLM's understanding of available tools. It can be thought of like a "hint" to the model.
   */
  description: z.optional(z.string()),
  /**
   * A JSON Schema object defining the expected parameters for the tool.
   */
  inputSchema: z.object({
    type: z.literal('object'),
    properties: z.optional(z.record(z.string(), z.object({}).catchall(z.unknown()))),
    required: z.optional(z.array(z.string())),
  }),
  /**
   * Optional additional tool information.
   */
  annotations: z.optional(toolAnnotationsSchema),
}) satisfies ZodType<Tool>;

/**
 * Type guard function for validating if a value is a Tool
 * @param value - The value to check
 * @returns True if the value matches the Tool schema
 */
export function isTool(value: unknown): value is Tool {
  return toolSchema.safeParse(value).success;
}
