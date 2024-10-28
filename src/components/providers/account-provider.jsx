import { useState } from "react";
import { AccountContext } from "../../contexts/account-context";
import { AccountService } from "../../services/account-service";

const accountService = new AccountService();

export const AccountProvider = ({ children }) => {
  const [, setAccount] = useState(null);

  accountService.updateSetFunction(setAccount);

  return (
    <AccountContext.Provider value={{ accountService }}>
      {children}
    </AccountContext.Provider>
  );
};
