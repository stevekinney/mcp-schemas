import { z } from "zod";
import type { TextResourceContents } from "../schema";
import type { ZodType } from 'zod';
import { resourceContentsSchema } from "./resource-contents";

/**
 * The text contents of a resource.
 */
export const textResourceContentsSchema = resourceContentsSchema.extend({
  /**
   * The text of the item. This must only be set if the item can actually be represented as text (not binary data).
   */
  text: z.string(),
}) satisfies ZodType<TextResourceContents>;
