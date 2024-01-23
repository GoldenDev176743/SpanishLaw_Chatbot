"use client";

import { useEffect, useRef } from "react";

import { MessageItem } from "@/types/chat";
import { IconOpenAI, IconUser } from "./Icons";

export interface ChatHistoryProps {
  messages: MessageItem[];
  loading: string | null;
}

const ChatContent = ({ messages, loading }: ChatHistoryProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      setTimeout(() => {
        if (divRef.current) {
          divRef.current.scrollTop = divRef.current?.scrollHeight;
        }
      }, 100);
    } catch (error) {
      console.warn(error);
    }
  }, [loading]);

  if (!messages) {
    return null;
  }

  return (
    <div className="relative min-h-screen">
      <div
        ref={divRef}
        className="fixed inset-0 pl-[250px] pr-[20px] w-full flex justify-center overflow-y-scroll"
      >
        <div className="flex flex-col gap-2 max-w-[800px] w-full p-10 font-inter text-[14px]">
          {messages.map((message, index) => (
            <div key={index} className="flex gap-3">
              <div
                className={`p-2 mt-4 duration-300 rounded-full shadow self-start ${
                  message.role === "user"
                    ? "bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100"
                    : "bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
                }`}
              >
                {message.role === "user" ? (
                  <IconUser className="w-4 h-4" />
                ) : (
                  <IconOpenAI className="w-4 h-4" />
                )}
              </div>
              <div
                className={`font-medium w-full py-5 rounded-xl duration-300 whitespace-pre-wrap border-zinc-200 text-zinc-800 dark:text-zinc-100 ${
                  message.role === "bot"
                    ? "px-3 duration-300 bg-zinc-300 dark:bg-zinc-700"
                    : "px-1"
                }`}
              >
                {message.message}
              </div>
            </div>
          ))}
          <div className="min-h-[180px]">
            {loading ? (
              <div className="bouncing-loader">
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
