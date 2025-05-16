# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development

```bash
# Install dependencies
bun install

# Run type checking
bun run typecheck

# Format code
bun run format

# Run linting with autofix
bun run lint

# Run all verification (format, lint, typecheck)
bun run verify

# Build the project
bun run build
```

## Project Overview

The `mcp-schemas` project provides TypeScript and Zod schemas for the Model Context Protocol (MCP). MCP is a JSON-RPC 2.0-based protocol for communication between clients and servers in AI/LLM contexts.

### Core Architecture

The project follows a clear structure:

1. **Base Type Definitions** (`src/schema.ts`):

   - Contains TypeScript interface definitions that reflect the official MCP specification
   - Defines all protocol message types, requests, responses, and notifications
   - Includes comprehensive type definitions for all features of the protocol

2. **Zod Schema Implementations** (`src/schemas/*.ts`):

   - Each file implements Zod schemas corresponding to the TypeScript interfaces
   - Schemas provide runtime validation for MCP protocol messages
   - Follow a consistent pattern of implementing a schema and exporting it
   - Each schema satisfies its corresponding TypeScript type (using `satisfies z.ZodType<T>`)

3. **Utility Functions** (`src/utilities.ts`):
   - Helper functions for creating request and notification schemas
   - Simplifies the creation of new schema types

### Protocol Features

The MCP schemas cover several key protocol features:

- **JSON-RPC Messages**: Request, Response, Notification, Error, and Batch operations
- **Client-Server Communication**: Initialize, Ping, Progress tracking
- **Resources**: Listing, reading, templating, and subscribing to resources
- **Prompts**: Managing prompt templates and arguments
- **Tools**: Tool definitions, calling tools, and handling results
- **Content Types**: Text, Image, Audio, and Embedded Resources
- **Logging**: Log level management and message notifications
- **LLM Sampling**: Creating messages with model preferences

### Code Organization

- Each schema file typically focuses on a single type
- Files are consistently structured with imports, type references, and schema exports
- Schemas build on each other to form more complex protocol structures
- The project uses TypeScript's type system extensively to ensure schema correctness

### Build and Export

The project is configured to:

- Export TypeScript declarations
- Use ES modules
- Target Node.js and modern JavaScript environments
- Provide both types and implementation through the package exports
