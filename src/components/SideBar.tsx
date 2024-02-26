"use client";

import { useEffect, startTransition } from "react";
import Link from "next/link";

import useTheme from "@/hooks/useTheme";
import {
  IconOpenAI,
  IconEdit,
  IconMoon,
  IconSun,
  IconUser,
} from "./Icons";
import ChatHistory from "./ChatHistory";
import { dispatch, useSelector } from "@/store";
import {
  getHistory,
  setBotType,
  setChatList,
  setId,
} from "@/store/reducers/chat";
import { nanoId } from "@/lib/utils";
import { HomeIcon } from "@heroicons/react/24/solid";

const BotType = ["CASELAW", "JURISPRUDENCE", "PLAYGROUND"];

const SideBar = () => {
  const { isDarkTheme, toogleThemeHandler } = useTheme();

  const chatState = useSelector((state) => state.chat);

  // useEffect(() => {
  //   dispatch(getHistory(chatState.botType));
  // }, [chatState.botType, chatState.id]);

  return (
    <div className="fixed z-40 inset-y-0 left-0 flex flex-col w-[250px] px-3 duration-300 bg-zinc-200 dark:bg-black">
      <div className="flex mt-5 text-zinc-800 dark:text-zinc-200 justify-between items-center">
        <button className="flex gap-3 pr-2 items-center font-semibold font-playpen_sans text-[15px] rounded-md duration-300 hover:bg-zinc-300 dark:hover:bg-zinc-900">
          <div className="rounded-md p-[5px] bg-zinc-400 dark:bg-zinc-800">
            <IconUser className="w-4 h-4" />
          </div>
          <span>User Name</span>
        </button>
        <Link href={"/"} className="hover:text-amber-600">
          <HomeIcon className="w-5 h-5" />
        </Link>
      </div>
      <button
        onClick={() => {
          if (chatState.chatList?.length) {
            dispatch(setId(nanoId()));
            dispatch(setChatList([]));
          }
        }}
        className="flex flex-row justify-between shadow items-center mt-10 font-semibold font-playpen_sans rounded-2xl px-4 py-2 text-[17px] duration-300 border border-zinc-300 bg-zinc-200 text-zinc-800 hover:text-amber-600 hover:border-amber-600 dark:border-zinc-800 dark:bg-black dark:text-zinc-300 dark:hover:text-amber-600 dark:hover:border-amber-600"
      >
        <div className="flex gap-3 items-center">
          <IconOpenAI className="w-5 h-5" />
          <span>New Chat</span>
        </div>
        <IconEdit className="w-5 h-5" />
      </button>
      <div className="mt-8 px-2 text-[12px] font-medium font-playpen_sans text-zinc-500">
        Select Chatbot Type
      </div>
      <div className="flex flex-col gap-5 justify-between mt-5">
        {BotType.map((type) => (
          <button
            key={type}
            onClick={() => {
              if (chatState.botType === type.toLowerCase()) {
                return;
              }
              if (chatState.chatList?.length) {
                dispatch(setId(nanoId()));
                dispatch(setChatList([]));
              }
              dispatch(setBotType(type.toLowerCase()));
            }}
            className={`p-1 mx-5 rounded border font-semibold font-oswald duration-300 ${
              chatState.botType === type.toLowerCase()
                ? "bg-zinc-200 dark:bg-black text-amber-600 border border-amber-600 shadow-md"
                : "bg-zinc-200 text-zinc-600 border-zinc-300 dark:border-zinc-800 hover:bg-zinc-300 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-950"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="mt-8 px-2 text-[12px] font-medium font-playpen_sans text-zinc-500">
        Chat History
      </div>
      <div className="flex flex-col h-full overflow-hidden">
        {chatState.history.length ? (
          <ChatHistory history={chatState.history} />
        ) : (
          <div className="flex-1 p-5 text-center font-oswald font-semibold duration-300 text-zinc-400 dark:text-zinc-700">
            NO CHAT HISOTRY.
          </div>
        )}
        <div className="flex justify-between px-3 mb-5">
          <button
            onClick={() => startTransition(toogleThemeHandler)}
            className="rounded-full p-2 bg-zinc-300 text-zinc-800 dark:text-zinc-200 hover:text-amber-600 dark:bg-zinc-800 dark:hover:text-amber-600"
          >
            {isDarkTheme ? (
              <IconMoon className="w-5 h-5 transition-all" />
            ) : (
              <IconSun className="w-5 h-5 transition-all" />
            )}
          </button>
          <button className="font-semibold font-oswald text-[13px] hover:text-amber-600 text-zinc-500">
            CLEAR HISTORY
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
