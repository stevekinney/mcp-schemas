import { z } from 'zod';
import { audioContentSchema } from './audio-content';
import { embeddedResourceSchema } from './embedded-resource';
import { imageContentSchema } from './image-content';
import { textContentSchema } from './text-content';

/**
 * Union of all basic content schemas (text, image, audio)
 */
export const basicContentSchemas = z.union([textContentSchema, imageContentSchema, audioContentSchema]);

/**
 * Union of all content schemas including embedded resources
 */
export const allContentSchemas = z.union([
  textContentSchema,
  imageContentSchema,
  audioContentSchema,
  embeddedResourceSchema,
]);
