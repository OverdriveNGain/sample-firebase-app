import { ChatScreen } from "./chat-screen";
import { useEffect, useContext } from "react";
import { MessagesContext } from "../contexts/messages-context";

export const ProvidedApp = () => {
  const { messagesService } = useContext(MessagesContext);

  useEffect(() => {
    messagesService.fetchMessages();
  }, [messagesService]);

  console.log("Provided App Rebuild");
  return <ChatScreen />;
};
