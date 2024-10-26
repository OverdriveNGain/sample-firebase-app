import { MessageBubble } from "./message-bubble.jsx";
import { useContext } from "react";
import { MessagesContext } from "../contexts/messages-context";

export const MessageArea = () => {
  const { messages, messagesService } = useContext(MessagesContext);

  const messagesWithNeighbors = [];

  for (let i = 0; i < messages.length; i++) {
    const message = messages[i];
    if (i === 0) {
      messagesWithNeighbors.push({
        ...message,
        prev: null,
        next: messages[i + 1],
      });
    } else if (i === messages.length - 1) {
      messagesWithNeighbors.push({
        ...message,
        prev: messages[i - 1],
        next: null,
      });
    } else {
      messagesWithNeighbors.push({
        ...message,
        prev: messages[i - 1],
        next: messages[i + 1],
      });
    }
  }

  return (
    <div className="flex-1 h-full overflow-y-auto py-4">
      {messagesWithNeighbors.map((message) => {
        return (
          <div key={message.id} className="">
            <MessageBubble key={message.id} messageData={message} />
          </div>
        );
      })}
    </div>
  );
};
