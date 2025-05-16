import { type ZodType } from 'zod';
import type { EmptyResult, JSONRPCResponse } from '../schema';
import { jsonRpcResponseSchema } from './jsonrpc-response';

/**
 * A response that indicates success but carries no data.
 */
export const emptyResultSchema = jsonRpcResponseSchema satisfies ZodType<EmptyResult & JSONRPCResponse>;
