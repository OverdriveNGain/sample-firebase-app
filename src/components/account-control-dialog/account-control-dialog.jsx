import { AccountControlMode } from "../../types/enums/account-control";
import { useContext } from "react";
import { AccountContext } from "../../contexts/account-context";
import { AccountControlDialogContext } from "../../contexts/account-control-dialog-context";
import { LogOutBody } from "./log-out-body";
import { LogInBody } from "./log-in-body";
import { RegisterBody } from "./register-body";

export const AccountControlDialog = () => {
  const [accountPanelMode] = useContext(AccountControlDialogContext);

  let dialogTitle = "Unknown";
  let dialogBody = <></>;

  switch (accountPanelMode) {
    case AccountControlMode.ConfirmLogOut:
      dialogTitle = "Log Out";
      dialogBody = <LogOutBody />;
      break;
    case AccountControlMode.LogIn:
      dialogTitle = "Log In";
      dialogBody = <LogInBody />;
      break;
    case AccountControlMode.Register:
      dialogTitle = "Register";
      dialogBody = <RegisterBody />;
      break;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="bg-white rounded-lg px-8 py-4 text-black">
        <div className="font-bold text-center mb-4">{dialogTitle}</div>
        {dialogBody}
      </div>
    </div>
  );
};
