import { z } from 'zod';
import type { InitializeResult, JSONRPCResponse } from '../schema';
import type { ZodType } from 'zod';
import { jsonRpcResponseSchema } from './jsonrpc-response';
import { serverCapabilitiesSchema } from './server-capabilities';
import { implementationSchema } from './implementation';

/**
 * After receiving an initialize request from the client, the server sends this response.
 */
export const initializeResultSchema = jsonRpcResponseSchema.extend({
  /**
   * The version of the Model Context Protocol that the server wants to use. This may not match the version that the client requested. If the client cannot support this version, it MUST disconnect.
   */
  protocolVersion: z.string(),
  capabilities: serverCapabilitiesSchema,
  serverInfo: implementationSchema,
  /**
   * Instructions describing how to use the server and its features.
   *
   * This can be used by clients to improve the LLM's understanding of available tools, resources, etc. It can be thought of like a "hint" to the model. For example, this information MAY be added to the system prompt.
   */
  instructions: z.optional(z.string()),
}) satisfies ZodType<InitializeResult & JSONRPCResponse>;
