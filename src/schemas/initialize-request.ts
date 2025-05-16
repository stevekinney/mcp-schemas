import { z, type ZodType } from 'zod';
import type { InitializeRequest, JSONRPCRequest } from '../schema';
import { clientCapabilitiesSchema } from './client-capabilities';
import { implementationSchema } from './implementation';
import { jsonRpcRequestSchema } from './jsonrpc-request';

/**
 * This request is sent from the client to the server when it first connects, asking it to begin initialization.
 */
export const initializeRequestSchema = jsonRpcRequestSchema.extend({
  method: z.literal('initialize'),
  params: z.object({
    /**
     * The latest version of the Model Context Protocol that the client supports. The client MAY decide to support older versions as well.
     */
    protocolVersion: z.string(),
    capabilities: clientCapabilitiesSchema,
    clientInfo: implementationSchema,
  }),
}) satisfies ZodType<InitializeRequest & JSONRPCRequest>;
