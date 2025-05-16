/**
 * This file demonstrates usage of the type guards
 */

import { Resource, Tool, Prompt, Implementation, ModelPreferences, Annotations } from "../schema";
import { 
  isResource, 
  isTool, 
  isPrompt, 
  isImplementation, 
  isModelPreferences, 
  isAnnotations 
} from "./";

/**
 * Validates a schema against its type guard
 * @param value The value to validate
 * @param typeGuard The type guard function to use
 * @returns True if the value is valid according to the type guard
 */
export function validateSchema<T>(
  value: unknown, 
  typeGuard: (value: unknown) => value is T
): boolean {
  return typeGuard(value);
}

// Example usage - these would all return true
const resourceExample: Resource = {
  uri: "https://example.com/resource",
  name: "Example Resource"
};

const toolExample: Tool = {
  name: "exampleTool",
  inputSchema: {
    type: "object"
  }
};

const promptExample: Prompt = {
  name: "examplePrompt"
};

const implementationExample: Implementation = {
  name: "Example Implementation",
  version: "1.0.0"
};

const modelPreferencesExample: ModelPreferences = {
  costPriority: 0.5
};

const annotationsExample: Annotations = {
  audience: ["user"]
};

// Using the type guards
export const tests = {
  resource: validateSchema(resourceExample, isResource),
  tool: validateSchema(toolExample, isTool),
  prompt: validateSchema(promptExample, isPrompt),
  implementation: validateSchema(implementationExample, isImplementation),
  modelPreferences: validateSchema(modelPreferencesExample, isModelPreferences),
  annotations: validateSchema(annotationsExample, isAnnotations)
};