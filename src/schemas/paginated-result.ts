import { z } from "zod";
import type { PaginatedResult } from "../schema";
import type { ZodType } from "zod";
import { resultSchema } from "./result";
import { cursorSchema } from "./cursor";

/**
 * A result that supports pagination.
 */
export const paginatedResultSchema = resultSchema.extend({
  /**
   * An opaque token representing the pagination position after the last returned result.
   * If present, there may be more results available.
   */
  nextCursor: z.optional(cursorSchema),
}) satisfies ZodType<PaginatedResult>;
