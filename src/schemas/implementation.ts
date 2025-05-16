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

/**
 * Type guard function for validating if a value is an Implementation
 * @param value - The value to check
 * @returns True if the value matches the Implementation schema
 */
export function isImplementation(value: unknown): value is Implementation {
  return implementationSchema.safeParse(value).success;
}
