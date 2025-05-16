import { z } from "zod";
import type { ListToolsRequest } from "../schema";
import type { ZodType } from 'zod';
import { paginatedRequestSchema } from "./paginated-request";

/**
 * Sent from the client to request a list of tools the server has.
 */
export const listToolsRequestSchema = paginatedRequestSchema.extend({
  method: z.literal("tools/list"),
}) satisfies ZodType<ListToolsRequest>;
