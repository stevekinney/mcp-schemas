import { z } from "zod";
import type { ListPromptsRequest } from "../schema";
import { ZodType } from "zod";
import { paginatedRequestSchema } from "./paginated-request";

/**
 * Sent from the client to request a list of prompts and prompt templates the server has.
 */
export const listPromptsRequestSchema = paginatedRequestSchema.extend({
  method: z.literal("prompts/list"),
}) satisfies ZodType<ListPromptsRequest>;
