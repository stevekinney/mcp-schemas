import { z, type ZodType } from "zod";
import type { EmptyResult } from "../schema";
import { resultSchema } from "./result";

/**
 * A response that indicates success but carries no data.
 */
export const emptyResultSchema = resultSchema satisfies ZodType<EmptyResult>;
