import { z, type ZodType } from "zod";
import type { Cursor } from "../schema";

/**
 * An opaque token used to represent a cursor for pagination.
 */
export const cursorSchema = z.string() satisfies ZodType<Cursor>;
