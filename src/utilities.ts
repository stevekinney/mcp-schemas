import { z } from "zod";

/**
 * Creates a request schema with a specific method and params
 */
export function withRequest<M extends string, T extends z.ZodRawShape>(
  method: M,
  params: T,
) {
  return z.object({
    method: z.literal(method),
    params: z.object(params),
  });
}

/**
 * Creates a notification schema with a specific method and params
 */
export function withNotification<M extends string, T extends z.ZodRawShape>(
  method: M,
  params: T,
) {
  return z.object({
    method: z.literal(method),
    params: z.object(params),
  });
}
