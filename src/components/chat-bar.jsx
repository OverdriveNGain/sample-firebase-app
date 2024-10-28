import { useState, useContext } from "react";
import { MessagesContext } from "../contexts/messages-context";
import { AccountContext } from "../contexts/account-context";

export const ChatBar = () => {
  const { messagesService } = useContext(MessagesContext);
  const { accountService } = useContext(AccountContext);

  const [message, setMessage] = useState("");

  const account = accountService.getCurrentAccount();
  const isLoggedIn = account !== null;

  const buttonDisabled = message.length === 0;
  const sendOnClick = (e) => {
    messagesService.sendMessage(message, account.id);
    setMessage("");
  };
  return (
    <div className="flex flex-row bg-[#08381D] items-center py-2 px-8">
      <input
        className="flex-1 h-10 border border-gray-300 rounded-lg p-2 bg-gray-200 text-black disabled:opacity-25"
        type="text"
        placeholder={
          isLoggedIn ? "Type a message..." : "Log in to send messages..."
        }
        value={message}
        disabled={!isLoggedIn}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="bg-[#15ae5c] text-white px-4 py-2 rounded-lg ml-2 disabled:opacity-25"
        type="submit"
        disabled={buttonDisabled}
        onClick={sendOnClick}
      >
        Send
      </button>
    </div>
  );
};
