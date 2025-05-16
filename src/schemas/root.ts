import { z } from "zod";
import type { Root } from "../schema";
import type { ZodType } from 'zod';

/**
 * Represents a root directory or file that the server can operate on.
 */
export const rootSchema = z.object({
  /**
   * The URI identifying the root. This *must* start with file:// for now.
   * This restriction may be relaxed in future versions of the protocol to allow
   * other URI schemes.
   */
  uri: z.string().url(),
  /**
   * An optional name for the root. This can be used to provide a human-readable
   * identifier for the root, which may be useful for display purposes or for
   * referencing the root in other parts of the application.
   */
  name: z.optional(z.string()),
}) satisfies ZodType<Root>;
