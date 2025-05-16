import { z } from "zod";
import type { Role } from "../schema";
import { ZodType } from "zod";

/**
 * The sender or recipient of messages and data in a conversation.
 */
export const roleSchema = z.enum(["user", "assistant"]) satisfies ZodType<Role>;
