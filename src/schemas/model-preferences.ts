import { z } from "zod";
import type { ModelPreferences } from "../schema";
import { ZodType } from "zod";
import { modelHintSchema } from "./model-hint";

/**
 * The server's preferences for model selection, requested of the client during sampling.
 *
 * Because LLMs can vary along multiple dimensions, choosing the "best" model is
 * rarely straightforward. Different models excel in different areas—some are
 * faster but less capable, others are more capable but more expensive, and so
 * on. This interface allows servers to express their priorities across multiple
 * dimensions to help clients make an appropriate selection for their use case.
 *
 * These preferences are always advisory. The client MAY ignore them. It is also
 * up to the client to decide how to interpret these preferences and how to
 * balance them against other considerations.
 */
export const modelPreferencesSchema = z.object({
  /**
   * Optional hints to use for model selection.
   *
   * If multiple hints are specified, the client MUST evaluate them in order
   * (such that the first match is taken).
   *
   * The client SHOULD prioritize these hints over the numeric priorities, but
   * MAY still use the priorities to select from ambiguous matches.
   */
  hints: z.optional(z.array(modelHintSchema)),
  /**
   * How much to prioritize cost when selecting a model. A value of 0 means cost
   * is not important, while a value of 1 means cost is the most important
   * factor.
   */
  costPriority: z.optional(z.number().min(0).max(1)),
  /**
   * How much to prioritize sampling speed (latency) when selecting a model. A
   * value of 0 means speed is not important, while a value of 1 means speed is
   * the most important factor.
   */
  speedPriority: z.optional(z.number().min(0).max(1)),
  /**
   * How much to prioritize intelligence and capabilities when selecting a
   * model. A value of 0 means intelligence is not important, while a value of 1
   * means intelligence is the most important factor.
   */
  intelligencePriority: z.optional(z.number().min(0).max(1)),
}) satisfies ZodType<ModelPreferences>;

/**
 * Type guard function for validating if a value is a ModelPreferences object
 * @param value - The value to check
 * @returns True if the value matches the ModelPreferences schema
 */
export function isModelPreferences(value: unknown): value is ModelPreferences {
  return modelPreferencesSchema.safeParse(value).success;
}
