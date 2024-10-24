import './App.css'
import { Navbar } from './components/navbar'
import { ChatArea } from "./components/chat-area";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <ChatArea />
    </div>
  );
}

export default App
