import { z } from "zod";
import { requestSchema } from "./request";
import { notificationSchema } from "./notification";

export function withRequest<T extends z.ZodRawShape>(
  method: string,
  params: T,
) {
  return requestSchema.extend({
    method: z.literal(method),
    params: z.object(params),
  });
}

export function withNotification<T extends z.ZodRawShape>(
  method: string,
  params: T,
) {
  return notificationSchema.extend({
    method: z.literal(method),
    params: z.object(params),
  });
}
