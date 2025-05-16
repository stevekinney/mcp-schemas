import { z, ZodType } from 'zod';
import type { CreateMessageRequest } from '../schema';
import { withRequest } from '../utilities';
import { unknownObjectSchema } from './common-params';
import { modelPreferencesSchema } from './model-preferences';
import { samplingMessageSchema } from './sampling-message';

/**
 * A request from the server to sample an LLM via the client. The client has full discretion over which model to select. The client should also inform the user before beginning sampling, to allow them to inspect the request (human in the loop) and decide whether to approve it.
 */
export const createMessageRequestSchema = withRequest(
  'sampling/createMessage',
  {
    messages: z.array(samplingMessageSchema),
    /**
     * The server's preferences for which model to select. The client MAY ignore these preferences.
     */
    modelPreferences: z.optional(modelPreferencesSchema),
    /**
     * An optional system prompt the server wants to use for sampling. The client MAY modify or omit this prompt.
     */
    systemPrompt: z.optional(z.string()),
    /**
     * A request to include context from one or more MCP servers (including the caller), to be attached to the prompt. The client MAY ignore this request.
     */
    includeContext: z.optional(z.enum(['none', 'thisServer', 'allServers'])),
    /**
     * Temperature parameter for sampling.
     */
    temperature: z.optional(z.number()),
    /**
     * The maximum number of tokens to sample, as requested by the server. The client MAY choose to sample fewer tokens than requested.
     */
    maxTokens: z.number(),
    stopSequences: z.optional(z.array(z.string())),
    /**
     * Optional metadata to pass through to the LLM provider. The format of this metadata is provider-specific.
     */
    metadata: z.optional(unknownObjectSchema),
  },
) satisfies ZodType<CreateMessageRequest>;
