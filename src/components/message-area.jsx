import { MessageBubble } from "./message-bubble.jsx";

export const MessageArea = ({ messages }) => {
  return (
    <div className="flex-1 h-full overflow-y-auto p-4">
      {messages.map((message) => {
        return (
          <div key={message.id} className="mb-2">
            <MessageBubble key={message.id} messageData={message} />
          </div>
        );
      })}
    </div>
  );
};
