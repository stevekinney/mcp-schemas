import { z, type ZodType } from 'zod';
import type { PingRequest } from '../schema';
import { withRequest } from '../utilities';

/**
 * A ping, issued by either the server or the client, to check that the other party is still alive. The receiver must promptly respond, or else may be disconnected.
 */
export const pingRequestSchema = withRequest(
  'ping',
  {},
) satisfies ZodType<PingRequest>;
