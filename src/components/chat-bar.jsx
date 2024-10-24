import { useState } from "react";

export const ChatBar = () => {
  const [message, setMessage] = useState("");

  const buttonDisabled = message.length === 0;
  return (
    <div className="flex flex-row bg-[#08381D] items-center py-2 px-8">
      <input
        className="flex-1 h-10 border border-gray-300 rounded-lg p-2"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="bg-[#15ae5c] text-white px-4 py-2 rounded-lg ml-2 disabled:opacity-25"
        type="submit"
        disabled={buttonDisabled}
      >
        Send
      </button>
    </div>
  );
};
