import './App.css'
import { Navbar } from './components/navbar'
import { ChatArea } from "./components/chat-area";
import { useState } from "react";
import { UserContext } from "./contexts/user-context";

function App() {
  const [users, setUsers] = useState([
    { id: "1", name: "John" },
    { id: "2", name: "Mary" },
  ]);

  return (
    <UserContext.Provider value={users}>
      <div className="flex flex-col h-screen">
        <Navbar />
        <ChatArea />
      </div>
    </UserContext.Provider>
  );
}

export default App
