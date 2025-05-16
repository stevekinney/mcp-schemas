import { z } from 'zod';
import type { RequestId } from '../schema';
import type { ZodType } from 'zod';

/**
 * A uniquely identifying ID for a request in JSON-RPC.
 */
export const requestIdSchema = z.union([z.string(), z.number()]) satisfies ZodType<RequestId>;
