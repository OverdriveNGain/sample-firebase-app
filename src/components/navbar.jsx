import { useContext, useState } from "react";
import { AccountContext } from "../contexts/account-context";
import { AccountControlMode } from "../types/enums/account-control";
import { AccountControlDialog } from "./account-control-dialog/account-control-dialog";
import { AccountControlDialogContext } from "../contexts/account-control-dialog-context";

export const Navbar = () => {
  const accountContext = useContext(AccountContext);
  const [accountPanelMode, setAccountPanelMode] = useState(null);

  const isLoggedIn = accountContext.account != null;
  const accountName = accountContext.account?.name ?? "";

  const accountButtonCallback = () => {
    if (isLoggedIn) {
      setAccountPanelMode(AccountControlMode.ConfirmLogOut);
    } else {
      setAccountPanelMode(AccountControlMode.LogIn);
    }
  };

  const accountButtonMainText = isLoggedIn ? accountName : "Log In";
  const accountButtonSubText = isLoggedIn ? "Click to Log Out" : null;

  return (
    <nav className="navbar flex flex-row bg-[#15ae5c] items-center px-8">
      <img
        className="h-10 mr-2 my-2"
        src="/images/sample_green_logo.jpg"
        alt="Logo"
      />
      <span className="flex-1">Global Chat</span>
      <button
        className="navbar-button mx-2 flex flex-col hover:bg-[#35ce7c] px-4 py-2 items-end justify-center h-full"
        onClick={accountButtonCallback}
        type="button"
      >
        <div>{accountButtonMainText}</div>
        {accountButtonSubText && (
          <div className="text-green text-[10px]">{accountButtonSubText}</div>
        )}
      </button>
      {accountPanelMode && (
        <AccountControlDialogContext.Provider
          value={[accountPanelMode, setAccountPanelMode]}
        >
          <AccountControlDialog />
        </AccountControlDialogContext.Provider>
      )}
    </nav>
  );
};
