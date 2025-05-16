import { z, type ZodType } from 'zod';
import type { ClientResult, JSONRPCResponse } from '../schema';
import { createMessageResultSchema } from './create-message-result';
import { emptyResultSchema } from './empty-result';
import { listRootsResultSchema } from './list-roots-result';

/**
 * Union of all possible client results.
 */
export const clientResultSchema = z.union([
  emptyResultSchema,
  createMessageResultSchema,
  listRootsResultSchema,
]) satisfies ZodType<ClientResult & JSONRPCResponse>;
