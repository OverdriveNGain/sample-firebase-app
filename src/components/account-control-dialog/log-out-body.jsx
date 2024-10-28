import { useContext } from "react";
import { AccountContext } from "../../contexts/account-context";
import { AccountControlDialogContext } from "../../contexts/account-control-dialog-context";

export const LogOutBody = () => {
  const { accountService } = useContext(AccountContext);
  const [, setAccountPanelMode] = useContext(AccountControlDialogContext);

  const logOutOnClick = () => {
    accountService.logout();
    setAccountPanelMode(null);
  };

  return (
    <div>
      <p>Are you sure you want to log out?</p>
      <div className="flex flex-row justify-center mt-4">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-lg ml-2"
          onClick={() => setAccountPanelMode(null)}
          type="button"
        >
          Cancel
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg ml-2"
          onClick={logOutOnClick}
          type="button"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};
