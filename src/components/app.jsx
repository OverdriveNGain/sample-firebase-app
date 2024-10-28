import { MessagesProvider } from "./providers/messages-provider.jsx";
import { AccountProvider } from "./providers/account-provider.jsx";
import { ProvidedApp } from "./provided-app.jsx";

function App() {
  return (
    <MessagesProvider>
      <AccountProvider>
        <ProvidedApp />
      </AccountProvider>
    </MessagesProvider>
  );
}

export default App;
