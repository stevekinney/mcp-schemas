import { z } from "zod";
import type { ListResourcesRequest } from "../schema";
import type { ZodType } from "zod";
import { paginatedRequestSchema } from "./paginated-request";

/**
 * Sent from the client to request a list of resources the server has.
 */
export const listResourcesRequestSchema = paginatedRequestSchema.extend({
  method: z.literal("resources/list"),
}) satisfies ZodType<ListResourcesRequest>;
