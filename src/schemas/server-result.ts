import { z } from "zod";
import type { ServerResult } from "../schema";
import type { ZodType } from 'zod';
import { emptyResultSchema } from "./empty-result";
import { initializeResultSchema } from "./initialize-result";
import { completeResultSchema } from "./complete-result";
import { getPromptResultSchema } from "./get-prompt-result";
import { listPromptsResultSchema } from "./list-prompts-result";
import { listResourceTemplatesResultSchema } from "./list-resource-templates-result";
import { listResourcesResultSchema } from "./list-resources-result";
import { readResourceResultSchema } from "./read-resource-result";
import { callToolResultSchema } from "./call-tool-result";
import { listToolsResultSchema } from "./list-tools-result";

/**
 * Union of all possible server results.
 */
export const serverResultSchema = z.union([
  emptyResultSchema,
  initializeResultSchema,
  completeResultSchema,
  getPromptResultSchema,
  listPromptsResultSchema,
  listResourceTemplatesResultSchema,
  listResourcesResultSchema,
  readResourceResultSchema,
  callToolResultSchema,
  listToolsResultSchema,
]) satisfies ZodType<ServerResult>;
