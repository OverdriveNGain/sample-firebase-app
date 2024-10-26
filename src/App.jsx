import './App.css'
import { Navbar } from './components/navbar'
import { ChatArea } from "./components/chat-area";
import { useState } from "react";
import { UserContext } from "./contexts/user-context";
import { AccountContext } from "./contexts/account-context";
import { MessagesContext } from "./contexts/messages-context";

function App() {
  const [users, setUsers] = useState([
    { id: "1", name: "John" },
    { id: "2", name: "Mary" },
    { id: "3", name: "Phil" },
  ]);

  const [account, setAccount] = useState({ id: "3", name: "Phil" });

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
      message:
        "I'm doing well too. Thanks! I just had a small migraine earlier this morning but I think it was because I stayed up late.",
      timestamp: 1729771044,
    },
    {
      id: "5",
      from: "3",
      message:
        "Bye! I have to go now but I'll let you know if I have anything to say later.",
      timestamp: 1729772044,
    },
  ]);

  return (
    <MessagesContext.Provider value={{ messages, setMessages }}>
      <AccountContext.Provider value={{ account, setAccount }}>
        <UserContext.Provider value={users}>
          <div className="flex flex-col h-screen">
            <Navbar />
            <ChatArea />
          </div>
        </UserContext.Provider>
      </AccountContext.Provider>
    </MessagesContext.Provider>
  );
}

export default App
