import { ChatScreen } from "./chat-screen.jsx";
import { useState } from "react";
import { UserContext } from "../contexts/user-context.js";
import { AccountContext } from "../contexts/account-context.js";
import { MessagesProvider } from "./providers/messages-provider.jsx";
import { ProvidedApp } from "./provided-app.jsx";

function App() {
  const [users, setUsers] = useState([
    { id: "1", name: "John" },
    { id: "2", name: "Mary" },
    { id: "3", name: "Phil" },
  ]);

  const [account, setAccount] = useState({ id: "3", name: "Phil" });

  return (
    <MessagesProvider>
      <AccountContext.Provider value={{ account, setAccount }}>
        <UserContext.Provider value={users}>
          <ProvidedApp />
        </UserContext.Provider>
      </AccountContext.Provider>
    </MessagesProvider>
  );
}

export default App;
