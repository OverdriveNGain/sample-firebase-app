import { MessagesProvider } from "./providers/messages-provider.jsx";
import { UsersProvider } from "./providers/users-provider.jsx";
import { AccountProvider } from "./providers/account-provider.jsx";
import { ProvidedApp } from "./provided-app.jsx";

function App() {
  return (
    <MessagesProvider>
      <AccountProvider>
        <UsersProvider>
          <ProvidedApp />
        </UsersProvider>
      </AccountProvider>
    </MessagesProvider>
  );
}

export default App;
