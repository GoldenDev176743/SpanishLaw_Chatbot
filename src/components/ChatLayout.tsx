"use client";

import { useState } from "react";

import ChatWelcome from "./ChatWelcome";
import ChatForm from "./ChatForm";
import { dispatch, useSelector } from "@/store";
import ChatContent from "./ChatContent";
import { addChatList, sendPrompt } from "@/store/reducers/chat";

const ChatLayout = () => {
  const chatState = useSelector((state) => state.chat);

  const [prompt, setPrompt] = useState<string>("");

  const handlePrompt = (value: string) => {
    dispatch(addChatList({ role: "user", message: value }));
    dispatch(
      sendPrompt({
        botType: chatState.botType,
        id: chatState.id,
        prompt: value,
      })
    );
  };

  if (chatState.botType != "caselaw") {
    return <ChatWelcome />;
  }

  return (
    <>
      {chatState.chatList?.length ? (
        <ChatContent
          messages={chatState.chatList}
          loading={chatState.loading}
        />
      ) : (
        <ChatWelcome />
      )}
      <ChatForm
        value={prompt}
        setValue={setPrompt}
        handleSubmit={handlePrompt}
        loading={chatState.loading}
      />
    </>
  );
};

export default ChatLayout;
