import { z } from "zod";
import type { ListToolsResult } from "../schema";
import type { ZodType } from 'zod';
import { paginatedResultSchema } from "./paginated-result";
import { toolSchema } from "./tool";

/**
 * The server's response to a tools/list request from the client.
 */
export const listToolsResultSchema = paginatedResultSchema.extend({
  tools: z.array(toolSchema),
}) satisfies ZodType<ListToolsResult>;
