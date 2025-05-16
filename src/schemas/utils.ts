import { z } from "zod";
import { requestSchema } from "./request";
import { notificationSchema } from "./notification";

export function withRequest<M extends string, T extends z.ZodRawShape>(
  method: M,
  params: T,
) {
  return requestSchema.extend({
    method: z.literal(method),
    params: z.object(params),
  });
}

export function withNotification<M extends string, T extends z.ZodRawShape>(
  method: M,
  params: T,
) {
  return notificationSchema.extend({
    method: z.literal(method),
    params: z.object(params),
  });
}
