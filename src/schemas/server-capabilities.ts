import { z } from 'zod';
import type { ServerCapabilities } from '../schema';
import type { ZodType } from 'zod';

/**
 * Capabilities that a server may support. Known capabilities are defined here, in this schema, but this is not a closed set: any server can define its own, additional capabilities.
 */
export const serverCapabilitiesSchema = z.object({
  /**
   * Experimental, non-standard capabilities that the server supports.
   */
  experimental: z.optional(z.record(z.string(), z.object({}).catchall(z.unknown()))),
  /**
   * Present if the server supports sending log messages to the client.
   */
  logging: z.optional(z.object({}).catchall(z.unknown())),
  /**
   * Present if the server supports argument autocompletion suggestions.
   */
  completions: z.optional(z.object({}).catchall(z.unknown())),
  /**
   * Present if the server offers any prompt templates.
   */
  prompts: z.optional(
    z.object({
      /**
       * Whether this server supports notifications for changes to the prompt list.
       */
      listChanged: z.optional(z.boolean()),
    }),
  ),
  /**
   * Present if the server offers any resources to read.
   */
  resources: z.optional(
    z.object({
      /**
       * Whether this server supports subscribing to resource updates.
       */
      subscribe: z.optional(z.boolean()),
      /**
       * Whether this server supports notifications for changes to the resource list.
       */
      listChanged: z.optional(z.boolean()),
    }),
  ),
  /**
   * Present if the server offers any tools to call.
   */
  tools: z.optional(
    z.object({
      /**
       * Whether this server supports notifications for changes to the tool list.
       */
      listChanged: z.optional(z.boolean()),
    }),
  ),
}) satisfies ZodType<ServerCapabilities>;
