import { z } from "zod";
import { requestSchema } from "./request";
import { notificationSchema } from "./notification";
import type { Request, Notification } from "../schema";

export function withRequest<M extends string, T extends z.ZodRawShape>(
  method: M,
  params: T,
): z.ZodObject<{
  method: z.ZodLiteral<M>;
  params: z.ZodObject<T, "strip", z.ZodTypeAny>;
}> {
  return requestSchema.extend({
    method: z.literal(method),
    params: z.object(params),
  });
}

export function withNotification<M extends string, T extends z.ZodRawShape>(
  method: M,
  params: T,
): z.ZodObject<{
  method: z.ZodLiteral<M>;
  params: z.ZodObject<T, "strip", z.ZodTypeAny>;
}> {
  return notificationSchema.extend({
    method: z.literal(method),
    params: z.object(params),
  });
}
