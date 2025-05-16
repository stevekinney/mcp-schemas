import { z } from "zod";
import type { LoggingLevel } from "../schema";
import { ZodType } from "zod";

/**
 * The severity of a log message.
 *
 * These map to syslog message severities, as specified in RFC-5424:
 * https://datatracker.ietf.org/doc/html/rfc5424#section-6.2.1
 */
export const loggingLevelSchema = z.enum([
  "debug",
  "info",
  "notice",
  "warning",
  "error",
  "critical",
  "alert",
  "emergency",
]) satisfies ZodType<LoggingLevel>;
