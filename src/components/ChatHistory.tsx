import { dispatch, useSelector } from "@/store";
import { setId } from "@/store/reducers/chat";
import { HistoryItem } from "@/types/chat";

export interface ChatHistoryProps {
  history: HistoryItem[];
}

const ChatHistory = ({ history }: ChatHistoryProps) => {
  const chatState = useSelector((state) => state.chat);

  return (
    <div className="flex flex-col flex-1 mt-2 px-3 mb-5 gap-1 overflow-y-auto">
      {history.map((item, index) => (
        <button
          key={index}
          onClick={() => dispatch(setId(item.id))}
          className={`px-3 text-[15px] min-h-8 duration-300 text-start rounded-md font-normal font-oswald truncate ${
            chatState.id === item.id
              ? "bg-zinc-300 shadow dark:bg-zinc-900 text-amber-600"
              : "bg-zinc-200 dark:bg-black text-zinc-800 dark:text-zinc-200"
          }`}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default ChatHistory;
