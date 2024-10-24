import { UserContext } from "../contexts/user-context";
import { useContext } from "react";

export const MessageBubble = ({ messageData }) => {
  const userContext = useContext(UserContext);

  const user = userContext.find((user) => user.id === messageData.from);

  const userName = user ? user.name : "Anonymous";

  return (
    <div className="flex">
      <div className="bg-[#444444] rounded-lg px-4 py-2 flex flex-col">
        <div className="mr-2 text-[10px] text-gray-400">{userName}</div>
        {messageData.message}
      </div>
    </div>
  );
};
