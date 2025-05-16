import { z } from "zod";
import type { ClientRequest } from "../schema";
import { ZodType } from "zod";
import { allClientRequests } from "./schema-registry";

/**
 * Union of all possible client requests.
 */
export const clientRequestSchema = z.union(allClientRequests) satisfies ZodType<ClientRequest>;
