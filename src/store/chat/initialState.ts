import { ChatMessage } from '@/types/chatMessage';
import { ChatTopic } from '@/types/topic';

export interface ChatStoreState {
  abortController?: AbortController;
  /**
   * @title 当前活动的会话
   * @description 当前正在编辑或查看的会话
   */
  activeId: string;
  activeTopicId?: string;
  /**
   * @deprecated
   */
  chatLoadingId?: string;
  inputMessage: string;
  messageLoadingIds: [];
  messages: ChatMessage[];
  /**
   * whether messages have fetched
   */
  messagesInit: boolean;
  shareLoading?: boolean;
  topicLoadingId?: string;
  topicRenamingId?: string;
  topicSearchKeywords: string;
  topics: ChatTopic[];
  /**
   * whether topics have fetched
   */
  topicsInit: boolean;
}

export const initialState: ChatStoreState = {
  activeId: 'inbox',
  inputMessage: '',
  messageLoadingIds: [],
  messages: [],
  messagesInit: false,
  topicSearchKeywords: '',
  topics: [],
  topicsInit: false,
};