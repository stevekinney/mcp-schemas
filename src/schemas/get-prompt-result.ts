import { z, type ZodType } from 'zod';
import type { GetPromptResult, JSONRPCResponse } from '../schema';
import { promptMessageSchema } from './prompt-message';
import { jsonRpcResponseSchema } from './jsonrpc-response';

/**
 * The server's response to a prompts/get request from the client.
 */
export const getPromptResultSchema = jsonRpcResponseSchema.extend({
  /**
   * An optional description for the prompt.
   */
  description: z.optional(z.string()),
  messages: z.array(promptMessageSchema),
}) satisfies ZodType<GetPromptResult & JSONRPCResponse>;
