import { z } from "zod";
import type { ListResourcesResult } from "../schema";
import type { ZodType } from "zod";
import { paginatedResultSchema } from "./paginated-result";
import { resourceSchema } from "./resource";

/**
 * The server's response to a resources/list request from the client.
 */
export const listResourcesResultSchema = paginatedResultSchema.extend({
  resources: z.array(resourceSchema),
}) satisfies ZodType<ListResourcesResult>;
