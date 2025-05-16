import { z } from "zod";
import type { Cursor } from "../schema";
import { ZodType } from "zod";

/**
 * An opaque token used to represent a cursor for pagination.
 */
export const cursorSchema = z.string() satisfies ZodType<Cursor>;
