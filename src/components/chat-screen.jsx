import { Navbar } from "./navbar";
import { ChatArea } from "./chat-area";

export const ChatScreen = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <ChatArea />
    </div>
  );
};
