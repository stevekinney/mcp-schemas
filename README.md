# MCP Schemas

[![License][license-badge]][license]
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
  // ...etc
} from 'mcp-schemas';
```

### Subpath Exports

Individual schemas can be imported directly via subpath exports to optimize bundle size:

```ts
// Import only what you need
import { initializeRequestSchema } from 'mcp-schemas/initialize-request';
import { callToolResultSchema } from 'mcp-schemas/call-tool-result';
```

Available subpaths include all schema names in kebab-case, such as:
- `mcp-schemas/client-request`
- `mcp-schemas/server-result`
- `mcp-schemas/jsonrpc-error`
- `mcp-schemas/resource-template`
- And many more

## 📚 Features

**✅ Complete Protocol Coverage**

- Supports all request/response/notification types in MCP
- Includes JSON-RPC 2.0 constructs: batch, error, notification, etc.

**🧪 Runtime Validation**

- Zod-based runtime validation for every protocol structure
- Use `schema.safeParse(...)` or `.parse(...)` to validate data

**🔧 Type-safe Extensibility**

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
# MCP Schemas

[![License][license-badge]][license]
[![npm version](https://img.shields.io/npm/v/mcp-schemas.svg)](https://www.npmjs.com/package/mcp-schemas)

> Type-safe TypeScript & Zod schemas for the Model Context Protocol (MCP)  
> **Version:** 0.0.4 | **Author:** Steve Kinney | **License:** MIT

_Peer Dependencies: `typescript` ^5_  
_Runtime Dependencies: `zod` ^3.24.4_

## Table of Contents

- [Overview](#overview)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Exports](#exports)  
- [Features](#features)  
- [Development](#development)  
- [Contributing](#contributing)  
- [License](#license)  

## Overview

`mcp-schemas` provides a comprehensive suite of TypeScript types and Zod schemas for the Model Context Protocol (MCP) (currently spec version `v2025-03-26`). MCP is a JSON-RPC 2.0-based protocol for robust client/server communication in AI/LLM environments.

This library ensures:

- Strong static typing for all protocol interactions  
- Runtime validation with Zod  
- Type-safe request/response/notification definitions  
- Ease of extensibility via `withRequest()` and `withNotification()` helpers  

## Installation

```bash
npm install mcp-schemas
```

Or with Bun:

```bash
bun install mcp-schemas
```

## Usage

Import from the root:

```ts
import { initializeRequestSchema, type InitializeRequest } from 'mcp-schemas';

const request: InitializeRequest = {
  method: 'initialize',
  params: {
    protocolVersion: '2025-03-26',
    capabilities: {},
    clientInfo: { name: 'MyClient', version: '1.0.0' },
  },
};

initializeRequestSchema.parse(request);
```

Tree‑shakeable subpath imports (optimize bundle size):

```ts
import { initializeRequestSchema } from 'mcp-schemas/initialize-request';
import { callToolResultSchema } from 'mcp-schemas/call-tool-result';
```

## Exports

- **Root index** (`mcp-schemas`): re‑exports all schemas from `src/schemas`  
- **Subpath exports**: each schema under `mcp-schemas/<schema-name>`  
- **Entry points**: `main`, `module`, and `types` all point to `dist/index.js` / `dist/index.d.ts`  

## Features

- ✅ **Complete Protocol Coverage**: All MCP request, response, and notification types (e.g., `initialize`, `ping`, `completion/complete`, batch operations, resources, prompts, tools, logging).  
- 🧪 **Runtime Validation**: Zod schemas for every message—use `.safeParse()` or `.parse()` to validate.  
- 🔧 **Type-safe Extensibility**: Utilities to compose new request/notification types.  
- 📦 **Modular Exports**: Tree‑shakeable subpath imports for minimal bundle sizes.  

## Development

All scripts use Bun:

```bash
bun install
bun run typecheck      # TypeScript type checking
bun run format         # Prettier formatting
bun run lint           # ESLint with autofix
bun run verify         # format, lint, typecheck
bun run build          # Build dist artifacts
```

## Contributing

1. Fork the repository  
2. Create a feature branch  
3. Add or update schema files under `src/schemas`  
4. Run `bun run verify`  
5. Submit a pull request  

Ensure changes align with the MCP specification and include both TypeScript and Zod schema updates.

[license-badge]: https://img.shields.io/npm/l/mcp-schemas.svg
[license]: https://opensource.org/licenses/MIT