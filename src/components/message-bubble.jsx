import { UsersContext } from "../contexts/users-context";
import { AccountContext } from "../contexts/account-context";
import { useContext } from "react";

export const MessageBubble = ({ messageData }) => {
  const { users, setUsers } = useContext(UsersContext);
  const { account } = useContext(AccountContext);

  const user = users.find((user) => user.id === messageData.from);
  const userName = user ? user.name : "Anonymous";
  const fromCurrentUser = messageData.from === account?.id;
  const previousMessageFromSameUser =
    messageData.prev?.from === messageData.from;
  const nextMessageFromSameUser = messageData.next?.from === messageData.from;

  return fromCurrentUser ? (
    <div
      className={`flex justify-end ml-16 ${
        previousMessageFromSameUser ? "mt-1" : "mt-2"
      }`}
    >
      <div className="bg-[#15ae5c] rounded-l-xl px-4 py-1 flex flex-col items-end">
        {messageData.message}
      </div>
    </div>
  ) : (
    <>
      {!previousMessageFromSameUser && (
        <div className="mr-2 text-[10px] text-gray-400 mb mt-1 ml-4">
          {userName}
        </div>
      )}
      <div className="flex mr-16 mt-1">
        <div className="bg-[#444444] rounded-r-xl px-4 py-1 flex flex-col">
          {messageData.message}
        </div>
      </div>
    </>
  );
};
