import { z, type ZodType } from 'zod';
import type { GetPromptRequest, JSONRPCRequest } from '../schema';
import { jsonRpcRequestSchema } from './jsonrpc-request';

/**
 * Used by the client to get a prompt provided by the server.
 */
export const getPromptRequestSchema = jsonRpcRequestSchema.extend({
  method: z.literal('prompts/get'),
  params: z.object({
    /**
     * The name of the prompt or prompt template.
     */
    name: z.string(),
    /**
     * Arguments to use for templating the prompt.
     */
    arguments: z.optional(z.record(z.string(), z.string())),
  }),
}) satisfies ZodType<GetPromptRequest & JSONRPCRequest>;
