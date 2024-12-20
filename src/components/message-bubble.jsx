import { AccountContext } from "../contexts/account-context";
import { useContext, useEffect, useState } from "react";

export const MessageBubble = ({ messageData }) => {
  const { accountService } = useContext(AccountContext);
  const [senderAccount, setSenderAccount] = useState(null);

  const currentAccount = accountService.getCurrentAccount();

  useEffect(() => {
    accountService
      .getAccountById(messageData.from)
      .then((account) => setSenderAccount(account));
  }, [messageData.from, accountService]);

  const accountName = senderAccount ? senderAccount.name : "Anonymous";
  const fromCurrentUser =
    senderAccount && messageData.from === currentAccount?.id;
  const previousMessageFromSameUser =
    messageData.prev?.from === messageData.from;

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
          {accountName}
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
