import { pingRequestSchema } from "./ping-request";
import { initializeRequestSchema } from "./initialize-request";
import { completeRequestSchema } from "./complete-request";
import { setLevelRequestSchema } from "./set-level-request";
import { getPromptRequestSchema } from "./get-prompt-request";
import { listPromptsRequestSchema } from "./list-prompts-request";
import { listResourcesRequestSchema } from "./list-resources-request";
import { listResourceTemplatesRequestSchema } from "./list-resource-templates-request";
import { readResourceRequestSchema } from "./read-resource-request";
import { subscribeRequestSchema } from "./subscribe-request";
import { unsubscribeRequestSchema } from "./unsubscribe-request";
import { callToolRequestSchema } from "./call-tool-request";
import { listToolsRequestSchema } from "./list-tools-request";
import { cancelledNotificationSchema } from "./cancelled-notification";
import { progressNotificationSchema } from "./progress-notification";
import { initializedNotificationSchema } from "./initialized-notification";
import { rootsListChangedNotificationSchema } from "./roots-list-changed-notification";
import { createMessageRequestSchema } from "./create-message-request";
import { listRootsRequestSchema } from "./list-roots-request";
import { loggingMessageNotificationSchema } from "./logging-message-notification";
import { resourceUpdatedNotificationSchema } from "./resource-updated-notification";
import { resourceListChangedNotificationSchema } from "./resource-list-changed-notification";
import { toolListChangedNotificationSchema } from "./tool-list-changed-notification";
import { promptListChangedNotificationSchema } from "./prompt-list-changed-notification";

/**
 * Registry of all client request schemas
 */
export const allClientRequests = [
  pingRequestSchema,
  initializeRequestSchema,
  completeRequestSchema,
  setLevelRequestSchema,
  getPromptRequestSchema,
  listPromptsRequestSchema,
  listResourcesRequestSchema,
  listResourceTemplatesRequestSchema,
  readResourceRequestSchema,
  subscribeRequestSchema,
  unsubscribeRequestSchema,
  callToolRequestSchema,
  listToolsRequestSchema,
];

/**
 * Registry of all client notification schemas
 */
export const allClientNotifications = [
  cancelledNotificationSchema,
  progressNotificationSchema,
  initializedNotificationSchema,
  rootsListChangedNotificationSchema,
];

/**
 * Registry of all server request schemas
 */
export const allServerRequests = [
  pingRequestSchema,
  createMessageRequestSchema,
  listRootsRequestSchema,
];

/**
 * Registry of all server notification schemas
 */
export const allServerNotifications = [
  cancelledNotificationSchema,
  progressNotificationSchema,
  loggingMessageNotificationSchema,
  resourceUpdatedNotificationSchema,
  resourceListChangedNotificationSchema,
  toolListChangedNotificationSchema,
  promptListChangedNotificationSchema,
];
