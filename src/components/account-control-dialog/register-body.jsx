import { useContext, useState } from "react";
import { AccountContext } from "../../contexts/account-context";
import { AccountControlDialogContext } from "../../contexts/account-control-dialog-context";
import { AccountControlMode } from "../../types/enums/account-control";

export const RegisterBody = () => {
  const accountContext = useContext(AccountContext);
  const [accountPanelMode, setAccountPanelMode] = useContext(
    AccountControlDialogContext
  );

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const registerOnClick = () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
    } else {
      setErrorMessage("");
      // accountContext.registerAccount(username, password);
      // setAccountPanelMode(AccountControlMode.LogIn);
    }
  };

  return (
    <div>
      <p>Create an account to use Global Chat</p>
      <div className="flex flex-col items-stretch">
        <label className="block my-2">
          <span className="opacity-50">Username:</span>
          <input
            className="p-2 border-2 border-gray-300 rounded-lg block w-full bg-gray-200"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="block my-2">
          <span className="opacity-50">Password:</span>
          <input
            className="p-2 border-2 border-gray-300 rounded-lg block w-full bg-gray-200"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label className="block my-2">
          <span className="opacity-50">Confirm Password:</span>
          <input
            className="p-2 border-2 border-gray-300 rounded-lg block w-full bg-gray-200"
            type="password"
            placeholder="Enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>

        {errorMessage.length > 0 && (
          <p className="text-red-500 text-center mt-2">Error: {errorMessage}</p>
        )}

        <hr className="my-3" />

        <button
          className="text-green-500 my-2"
          type="button"
          onClick={() => setAccountPanelMode(AccountControlMode.LogIn)}
        >
          I already have an account
        </button>
        <div className="flex flex-row justify-center mt-1">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg ml-2 disabled:opacity-25"
            type="button"
            disabled={
              username.length === 0 ||
              password.length === 0 ||
              confirmPassword.length === 0
            }
            onClick={registerOnClick}
          >
            Register
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-lg ml-2"
            type="button"
            onClick={() => setAccountPanelMode(null)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
