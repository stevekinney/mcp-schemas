import { z } from 'zod';
import type { ListRootsResult, JSONRPCResponse } from '../schema';
import type { ZodType } from 'zod';
import { jsonRpcResponseSchema } from './jsonrpc-response';
import { rootSchema } from './root';

/**
 * The client's response to a roots/list request from the server.
 * This result contains an array of Root objects, each representing a root directory
 * or file that the server can operate on.
 */
export const listRootsResultSchema = jsonRpcResponseSchema.extend({
  roots: z.array(rootSchema),
}) satisfies ZodType<ListRootsResult & JSONRPCResponse>;
