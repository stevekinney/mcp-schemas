import { z } from "zod";
import type { Result } from "../schema";
import type { ZodType } from "zod";

/**
 * Defines a basic result object in the MCP protocol.
 */
export const resultSchema = z
  .object({
    /**
     * This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.
     */
    _meta: z.optional(z.record(z.string(), z.unknown())),
  })
  .catchall(z.unknown()) satisfies ZodType<Result>;
