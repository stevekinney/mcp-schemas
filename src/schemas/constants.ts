import { z } from 'zod';
import { JSONRPC_VERSION, LATEST_PROTOCOL_VERSION } from '../schema';

export const JSONRPC_VERSION_SCHEMA = z.literal(JSONRPC_VERSION);
export const LATEST_PROTOCOL_VERSION_SCHEMA = z.literal(LATEST_PROTOCOL_VERSION);

// Standard JSON-RPC error codes
export const PARSE_ERROR_SCHEMA = z.literal(-32700);
export const INVALID_REQUEST_SCHEMA = z.literal(-32600);
export const METHOD_NOT_FOUND_SCHEMA = z.literal(-32601);
export const INVALID_PARAMS_SCHEMA = z.literal(-32602);
export const INTERNAL_ERROR_SCHEMA = z.literal(-32603);
