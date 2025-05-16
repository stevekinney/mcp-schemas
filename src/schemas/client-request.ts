import { z } from 'zod';
import type { ClientRequest } from '../schema';
import { callToolRequestSchema } from './call-tool-request';
import { completeRequestSchema } from './complete-request';
import { getPromptRequestSchema } from './get-prompt-request';
import { initializeRequestSchema } from './initialize-request';
import { listPromptsRequestSchema } from './list-prompts-request';
import { listResourceTemplatesRequestSchema } from './list-resource-templates-request';
import { listResourcesRequestSchema } from './list-resources-request';
import { listToolsRequestSchema } from './list-tools-request';
import { pingRequestSchema } from './ping-request';
import { readResourceRequestSchema } from './read-resource-request';
import { setLevelRequestSchema } from './set-level-request';
import { subscribeRequestSchema } from './subscribe-request';
import { unsubscribeRequestSchema } from './unsubscribe-request';

/**
 * Union of all possible client requests.
 */
// Explicitly define ClientRequest schema with proper method values
const clientRequestSchema = z.object({
  method: z.enum([
    'ping',
    'initialize',
    'completion/complete',
    'logging/setLevel',
    'prompts/get',
    'prompts/list',
    'resources/list',
    'resources/templates/list',
    'resources/read',
    'resources/subscribe',
    'resources/unsubscribe',
    'tools/call',
    'tools/list',
  ]),
  params: z.object({}).passthrough().optional(),
});

// Export the schema with correct type
export { clientRequestSchema };

// Runtime schemas are preserved for validation
const runtimeValidationSchema = z.union([
  pingRequestSchema,
  initializeRequestSchema,
  completeRequestSchema,
  setLevelRequestSchema,
  getPromptRequestSchema,
  listPromptsRequestSchema,
  listResourcesRequestSchema,
  listResourceTemplatesRequestSchema,
  readResourceRequestSchema,
  subscribeRequestSchema,
  unsubscribeRequestSchema,
  callToolRequestSchema,
  listToolsRequestSchema,
]);

// Add a type guard function for runtime validation
export function isClientRequest(value: unknown): value is ClientRequest {
  return runtimeValidationSchema.safeParse(value).success;
}
