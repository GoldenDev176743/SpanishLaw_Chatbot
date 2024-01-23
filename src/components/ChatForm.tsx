"use client";

import {
  useEffect,
  useRef,
  KeyboardEvent,
  Dispatch,
  SetStateAction,
} from "react";

import { IconArrowElbow } from "./Icons";

export interface ChatFromProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  handleSubmit: (value: string) => void;
  loading: string | null;
}

const ChatForm = ({
  value,
  setValue,
  handleSubmit,
  loading,
}: ChatFromProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "inherit";
      inputRef.current.style.height = `${inputRef.current?.scrollHeight}px`;
    }
  }, [value]);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      if (loading != "Waiting Response") formRef.current?.requestSubmit();
    }
  };

  return (
    <form
      action=""
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        if (!value?.trim()) {
          return;
        }
        setValue("");
        handleSubmit(value);
      }}
    >
      <div className="fixed gap-3 inset-x-0 bottom-0 flex flex-col justify-end items-center ml-[250px] mr-[10px] py-5 duration-300 bg-zinc-100 dark:bg-zinc-800">
        <div className="flex rounded-xl max-w-[800px] w-full pl-5 pr-2 py-3 items-center border border-zinc-700 text-zinc-900 dark:text-zinc-100">
          <textarea
            ref={inputRef}
            value={value}
            rows={1}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Send a massage..."
            className="resize-none font-inter text-[15px] w-full overflow-hidden max-h-[120px] focus:outline-none bg-transparent"
          />
          {loading != "Waiting Response" && value ? (
            <button
              type="submit"
              className="p-2 rounded-lg self-end duration-300 text-zinc-900 bg-zinc-300 dark:text-zinc-100 dark:bg-zinc-500 hover:bg-zinc-400 dark:hover:bg-zinc-400"
            >
              <IconArrowElbow className="w-5 h-5" />
            </button>
          ) : (
            <div className="p-2 rounded-lg self-end duration-300 text-zinc-400 bg-zinc-200 dark:text-zinc-600 dark:bg-zinc-700">
              <IconArrowElbow className="w-5 h-5" />
            </div>
          )}
        </div>
        <div className="text-zinc-600 font-normal font-playpen_sans text-[12px] dark:text-zinc-400">
          ChatGPT can make mistakes. Consider checking important information.
        </div>
      </div>
    </form>
  );
};

export default ChatForm;
