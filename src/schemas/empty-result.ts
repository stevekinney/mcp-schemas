import { z } from "zod";
import type { EmptyResult } from "../schema";
import { ZodType } from "zod";
import { resultSchema } from "./result";

/**
 * A response that indicates success but carries no data.
 */
export const emptyResultSchema = resultSchema satisfies ZodType<EmptyResult>;
