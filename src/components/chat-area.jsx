import { useState } from "react";
import { MessageArea } from "./message-area";
import { ChatBar } from "./chat-bar";

export const ChatArea = () => {
  return (
    <div className="flex-1 flex flex-col">
      <MessageArea />
      <ChatBar />
    </div>
  );
};
