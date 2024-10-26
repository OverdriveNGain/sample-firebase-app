import './App.css'
import { Navbar } from './components/navbar'
import { ChatArea } from "./components/chat-area";
import { useState } from "react";
import { UserContext } from "./contexts/user-context";
import { AccountContext } from "./contexts/account-context";

function App() {
  const [users, setUsers] = useState([
    { id: "1", name: "John" },
    { id: "2", name: "Mary" },
  ]);

  const [account, setAccount] = useState({ id: "3", name: "Phil" });

  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      <UserContext.Provider value={users}>
        <div className="flex flex-col h-screen">
          <Navbar />
          <ChatArea />
        </div>
      </UserContext.Provider>
    </AccountContext.Provider>
  );
}

export default App
