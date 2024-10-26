import { useState } from "react";
import { MessagesContext } from "../../contexts/messages-context";
import { MessagesService } from "../../services/messages-service";

const messagesService = new MessagesService();

export const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  messagesService.updateSetFunction(setMessages);

  return (
    <MessagesContext.Provider value={{ messages, messagesService }}>
      {children}
    </MessagesContext.Provider>
  );
};
