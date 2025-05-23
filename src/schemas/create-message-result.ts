import { z, type ZodType } from 'zod';
import type { CreateMessageResult, JSONRPCResponse } from '../schema';
import { audioContentSchema } from './audio-content';
import { imageContentSchema } from './image-content';
import { jsonRpcResponseSchema } from './jsonrpc-response';
import { roleSchema } from './role';
import { textContentSchema } from './text-content';

/**
 * The client's response to a sampling/create_message request from the server. The client should inform the user before returning the sampled message, to allow them to inspect the response (human in the loop) and decide whether to allow the server to see it.
 */
export const createMessageResultSchema = jsonRpcResponseSchema.extend({
  role: roleSchema,
  content: z.union([textContentSchema, imageContentSchema, audioContentSchema]),
  /**
   * The name of the model that generated the message.
   */
  model: z.string(),
  /**
   * The reason why sampling stopped, if known.
   */
  stopReason: z.optional(
    z.union([z.literal('endTurn'), z.literal('stopSequence'), z.literal('maxTokens'), z.string()]),
  ),
}) satisfies ZodType<CreateMessageResult & JSONRPCResponse>;
