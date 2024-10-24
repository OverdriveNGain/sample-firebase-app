import { useState } from "react";
import { MessageArea } from "./message-area";
import { ChatBar } from "./chat-bar";

export const ChatArea = () => {
  const [account, setAccount] = useState({ id: "3", name: "Bob" });
  const [messages, setMessages] = useState([
    { id: "1", from: "1", message: "Hello", timestamp: 1729755044 },
    { id: "2", from: "2", message: "Hi! What's up?", timestamp: 1729768044 },
    {
      id: "3",
      from: "1",
      message: "I'm fine. How are you?",
      timestamp: 1729770044,
    },
    {
      id: "4",
      from: "2",
      message: "I'm doing well too. Thanks!",
      timestamp: 1729771044,
    },
    { id: "5", from: "3", message: "Bye!", timestamp: 1729772044 },
  ]);

  return (
    <div className="flex-1 flex flex-col">
      <MessageArea messages={messages} />
      <ChatBar />
    </div>
  );
};
