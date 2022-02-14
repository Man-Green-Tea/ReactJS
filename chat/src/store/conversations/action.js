import { CREATE_CONVERSATION, DELETE_CONVERSATION } from "./types";

export const createConversation = (conversations) => ({
  type: CREATE_CONVERSATION,
  payload: conversations,
});

export const deleteConversation = (conversations) => ({
  type: DELETE_CONVERSATION,
  payload: conversations,
});
