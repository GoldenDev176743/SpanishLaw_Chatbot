export interface MessageItem {
  role: "bot" | "user";
  message: string;
}

export interface HistoryItem {
  title: string;
  id: string;
}

export interface ChatStateProps {
  id: string;
  botType: "caselaw" | "jurisprudence" | "playground";
  chatList: MessageItem[];
  history: HistoryItem[];
  loading: string | null;
  error: object | string | null;
}
