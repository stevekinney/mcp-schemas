import { z } from "zod";
import type { ClientRequest } from "../schema";
import { ZodType } from "zod";
import { pingRequestSchema } from "./ping-request";
import { initializeRequestSchema } from "./initialize-request";
import { completeRequestSchema } from "./complete-request";
import { setLevelRequestSchema } from "./set-level-request";
import { getPromptRequestSchema } from "./get-prompt-request";
import { listPromptsRequestSchema } from "./list-prompts-request";
import { listResourcesRequestSchema } from "./list-resources-request";
import { listResourceTemplatesRequestSchema } from "./list-resource-templates-request";
import { readResourceRequestSchema } from "./read-resource-request";
import { subscribeRequestSchema } from "./subscribe-request";
import { unsubscribeRequestSchema } from "./unsubscribe-request";
import { callToolRequestSchema } from "./call-tool-request";
import { listToolsRequestSchema } from "./list-tools-request";

/**
 * Union of all possible client requests.
 */
export const clientRequestSchema = z.union([
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
]) satisfies ZodType<ClientRequest>;
