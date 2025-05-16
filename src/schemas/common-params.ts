import { z } from 'zod';
import { cursorSchema } from './cursor';
import { loggingLevelSchema } from './logging-level';

/**
 * Common URI parameter
 */
export const uriParam = { uri: z.string().url() };

/**
 * Common cursor parameter for pagination
 */
export const cursorParam = { cursor: z.optional(cursorSchema) };

/**
 * Common logging level parameter
 */
export const loggingLevelParam = { level: loggingLevelSchema };

/**
 * Common empty object with catchall for unknown properties
 */
export const unknownObjectSchema = z.object({}).catchall(z.unknown());