"use client";

import Image from "next/image";

import useTheme from "@/hooks/useTheme";
import LogoIcon from "@/assets/logo-icon.png";
import { useSelector } from "@/store";

const ChatWelcome = () => {
  const { isDarkTheme } = useTheme();

  const chatState = useSelector((state) => state.chat);

  return (
    <div className="flex flex-col items-center mt-48">
      <Image
        src={LogoIcon}
        alt="logo-icon"
        width={150}
        height={150}
        className={`${isDarkTheme ? "" : "white-filter"}`}
        priority
      />
      <p className="mt-10 font-semibold text-[30px] font-playpen_sans text-zinc-800 dark:text-zinc-200">
        ¡Bienvenido a{" "}
        <span className="text-amber-600 font-extrabold">
          {chatState.botType.toUpperCase()}
        </span>{" "}
        Chatbot!
      </p>
      {chatState.botType != "caselaw" && (
        <p className="mt-10 font-semibold text-[30px] font-playpen_sans text-zinc-800 dark:text-zinc-200">
          Comming Soon ...
        </p>
      )}
    </div>
  );
};

export default ChatWelcome;
