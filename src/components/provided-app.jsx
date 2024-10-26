import { ChatScreen } from "./chat-screen";
import { useEffect, useContext } from "react";
import { MessagesContext } from "../contexts/messages-context";
import { UsersContext } from "../contexts/users-context";

export const ProvidedApp = () => {
  const { messagesService } = useContext(MessagesContext);
  const { usersService } = useContext(UsersContext);

  useEffect(() => {
    messagesService.fetchMessages();
    usersService.fetchUsers();
  }, [messagesService, usersService]);

  return <ChatScreen />;
};
