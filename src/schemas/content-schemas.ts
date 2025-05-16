import { z } from 'zod';
import { textContentSchema } from './text-content';
import { imageContentSchema } from './image-content';
import { audioContentSchema } from './audio-content';
import { embeddedResourceSchema } from './embedded-resource';

/**
 * Union of all basic content schemas (text, image, audio)
 */
export const basicContentSchemas = z.union([
  textContentSchema,
  imageContentSchema,
  audioContentSchema,
]);

/**
 * Union of all content schemas including embedded resources
 */
export const allContentSchemas = z.union([
  textContentSchema,
  imageContentSchema,
  audioContentSchema,
  embeddedResourceSchema,
]);