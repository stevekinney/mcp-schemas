# MCP Schemas

[![License][license-badge]][license]
[![npm version](https://img.shields.io/npm/v/mcp-schemas.svg)](https://www.npmjs.com/package/mcp-schemas)
[![npm version](https://img.shields.io/npm/v/mcp-schemas.svg)](https://www.npmjs.com/package/mcp-schemas)

> Type-safe TypeScript + Zod schemas for the Model Context Protocol (MCP)

## 🧠 Overview

`mcp-schemas` provides a suite of **TypeScript types** and **Zod schemas** for the [Model Context Protocol (MCP)](https://github.com/modelcontextprotocol/modelcontextprotocol)—a JSON-RPC 2.0-based protocol for robust client/server communication in LLM and AI-assisted environments.

- Strong static typing for all protocol interactions
- Runtime validation with [Zod](https://zod.dev/)
- Type-safe request/response definitions
- Support for evolving schema specs (currently MCP `v2025-03-26`)

If you're building tools or AI clients/servers that speak MCP, this library handles protocol compliance for you.

## 📦 Installation

```bash
npm install mcp-schemas
```

## 🚀 Usage

```ts
import { initializeRequestSchema, type InitializeRequest } from 'mcp-schemas';

// Type-safe usage
const request: InitializeRequest = {
  method: 'initialize',
  params: {
    protocolVersion: '2025-03-26',
    capabilities: {},
    clientInfo: { name: 'MyClient', version: '1.0.0' },
  },
};

// Runtime validation
initializeRequestSchema.parse(request);
```

All schemas are available as named exports:

```ts
import {
  listResourcesRequestSchema,
  callToolResultSchema,
  annotationsSchema,
  jsonrpcBatchResponseSchema,
  // ...etc
} from 'mcp-schemas';
```

## 📚 Features

- **✅ Complete Protocol Coverage**
  - Supports all request/response/notification types in MCP
  - Includes JSON-RPC 2.0 constructs: batch, error, notification, etc.
- **🧪 Runtime Validation**
  - Zod-based runtime validation for every protocol structure
  - Use `schema.safeParse(...)` or `.parse(...)` to validate data
- **🔧 Type-safe Extensibility**
  - Modular and type-driven
  - Compose new request types easily with `withRequest()` and `withNotification()`

## 🛠️ Development

All scripts use Bun:

```bash
# Install deps
bun install

# Type check
bun run typecheck

# Format code
bun run format

# Lint with autofix
bun run lint

# Run all verifications (format, lint, typecheck)
bun run verify

# Build the project
bun run build
```

## 🤝 Contributing

1. Fork the repo
2. Create a new branch
3. Add or modify schema files under `src/schemas`
4. Run `bun run verify`
5. Submit a pull request

Schema changes should align with the MCP specification and include type + Zod coverage.

## 💬 Attribution

Protocol spec © Model Context Protocol authors. This package provides typed tooling for protocol consumers.

[license-badge]: https://img.shields.io/npm/l/mcp-schemas.svg
[license]: https://opensource.org/licenses/MIT