import { useState } from "react";
import { AccountContext } from "../contexts/account-context.js";
import { MessagesProvider } from "./providers/messages-provider.jsx";
import { UsersProvider } from "./providers/users-provider.jsx";
import { ProvidedApp } from "./provided-app.jsx";

function App() {
  const [account, setAccount] = useState({ id: "3", name: "Phil" });

  return (
    <MessagesProvider>
      <AccountContext.Provider value={{ account, setAccount }}>
        <UsersProvider>
          <ProvidedApp />
        </UsersProvider>
      </AccountContext.Provider>
    </MessagesProvider>
  );
}

export default App;
