import { z } from 'zod';
import type { JSONRPCError } from '../schema';
import type { ZodType } from 'zod';
import { requestIdSchema } from './request-id';
import { JSONRPC_VERSION_SCHEMA } from './constants';

/**
 * A response to a request that indicates an error occurred.
 */
export const jsonrpcErrorSchema = z.object({
  jsonrpc: JSONRPC_VERSION_SCHEMA,
  id: requestIdSchema,
  error: z.object({
    /**
     * The error type that occurred.
     */
    code: z.number(),
    /**
     * A short description of the error. The message SHOULD be limited to a concise single sentence.
     */
    message: z.string(),
    /**
     * Additional information about the error. The value of this member is defined by the sender (e.g. detailed error information, nested errors etc.).
     */
    data: z.optional(z.unknown()),
  }),
}) satisfies ZodType<JSONRPCError>;
