import { z, type ZodType } from "zod";
import type { CompleteRequest } from "../schema";
import { promptReferenceSchema } from "./prompt-reference";
import { requestSchema } from "./request";
import { resourceReferenceSchema } from "./resource-reference";

/**
 * A request from the client to the server, to ask for completion options.
 */
export const completeRequestSchema = requestSchema.extend({
  method: z.literal("completion/complete"),
  params: z.object({
    ref: z.union([promptReferenceSchema, resourceReferenceSchema]),
    /**
     * The argument's information
     */
    argument: z.object({
      /**
       * The name of the argument
       */
      name: z.string(),
      /**
       * The value of the argument to use for completion matching.
       */
      value: z.string(),
    }),
  }),
}) satisfies ZodType<CompleteRequest>;
