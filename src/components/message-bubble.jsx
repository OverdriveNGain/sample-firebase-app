import { UserContext } from "../contexts/user-context";
import { AccountContext } from "../contexts/account-context";
import { useContext } from "react";


export const MessageBubble = ({ messageData }) => {
  const userContext = useContext(UserContext);
  const accountContext = useContext(AccountContext);

  const { account } = accountContext;

  const user = userContext.find((user) => user.id === messageData.from);

  const userName = user ? user.name : "Anonymous";

  const fromCurrentUser = messageData.from === account.id;

  return fromCurrentUser ? (
    <div className="flex justify-end ml-16">
      <div className="bg-[#15ae5c] rounded-lg px-4 py-2 flex flex-col items-end">
        <div className="ml-2 text-[10px] text-green-300">{userName}</div>
        {messageData.message}
      </div>
    </div>
  ) : (
    <div className="flex mr-16">
      <div className="bg-[#444444] rounded-lg px-4 py-2 flex flex-col">
        <div className="mr-2 text-[10px] text-gray-400">{userName}</div>
        {messageData.message}
      </div>
    </div>
  );
};
