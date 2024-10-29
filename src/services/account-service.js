import { doc, setDoc, collection, query } from "firebase/firestore";
import { mockAccountTable } from '../mocks/mock-accounts-table';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../main";

export class AccountService {
  #currentUser = null;
  #setFunction = null; // currentUser

  /**
   * This function allows the AuthService instance to update the Application state
   * 
   * This should only be used by the AuthProvider
   */
  updateSetFunction = (setFunction) => {
    this.#setFunction = setFunction;
  };

  /**
   * This function allows the AuthService instance to update the Application state
   * 
   * This function should only be used by the AuthProvider
   */
  setAuth = (users) => {
    this.#setFunction(users);
  };

  /**
   * Checks if a user is currently logged in.
   * 
   * @returns {boolean} - True if a user is currently logged in, false otherwise.
   */
  isLoggedIn = () => {
    // ⬇️ ⬇️ ⬇️ Update to use Firebase!

    return this.#currentUser !== null;

    // ⬆️ ⬆️ ⬆️ Update to use Firebase!
  };

  /**
   * Logs in a user with the provided email and password.
   * 
   * @param {string} email - The email of the user.
   * @param {string} password - The password of the user.
   * @returns {string} - An error message if the login failed, null otherwise.
   */
  login = (email, password) => {
    // ⬇️ ⬇️ ⬇️ Update to use Firebase!

    const hashString = this.#hashString(password);
    const matchedAccounts = mockAccountTable.filter(accounts => accounts.email === email && accounts.password === hashString);

    if (matchedAccounts.length > 0) {
      this.#currentUser = matchedAccounts[0];
      this.#setFunction([this.#currentUser, mockAccountTable]);

      return null;
    }

    return "Invalid username or password";

    // ⬆️ ⬆️ ⬆️ Update to use Firebase!
  };

  /**
   * Logs out the current user.
   */
  logout = () => {
    // ⬇️ ⬇️ ⬇️ Update to use Firebase!

    this.#currentUser = null;
    this.#setFunction([this.#currentUser, mockAccountTable]);

    // ⬆️ ⬆️ ⬆️ Update to use Firebase!
  };

  /**
   * Logs in a user with the provided email and password.
   * 
   * @param {string} email - The email of the user.
   * @param {string} password - The password of the user.
   * @param {string} name - The name of the user.
   * @returns {{success: boolean, error: string | null, account: {id: string, email: string, name: string, passwordHash: string}}} - An object containing the success status and an error message if applicable.
   */
  register = (email, password, name) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        setDoc(doc(firestore, "accounts", user.uid), {
          name,
        })

        const newAccount = {
          id: user.uid,
          name,
        };

        this.#currentUser = newAccount;
        this.#setFunction(this.#currentUser);

        return {
          success: true,
          account: { ...newAccount }
        };
      }).catch((error) => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            return {
              success: false,
              error: 'Email already in use'
            }
          case 'auth/weak-password':
            return {
              success: false,
              error: 'Password is too weak'
            }
          default:
            return {
              success: false,
              error: `Unknown error (${error})`
            }
        }
      });
  }

  /**
   * Gets the current user.
   * 
   * @returns {{id: string, email: string, name: string, passwordHash: string} | null} - The current user.
   */
  getCurrentAccount = () => {
    return this.#currentUser === null ? null : { ...this.#currentUser };
  }

  /**
   * Gets an account by its ID.
   * 
   * @param {string} id - The ID of the account.
   * @returns {{id: string, email: string, name: string, passwordHash: string} | null} - The account with the given ID, or null if not found.
   */
  getAccountById = (id) => {
    // ⬇️ ⬇️ ⬇️ Update to use Firebase!

    const matchedAccounts = mockAccountTable.filter(accounts => accounts.id === id);
    return matchedAccounts.length > 0 ? { ...matchedAccounts[0] } : null;

    // ⬆️ ⬆️ ⬆️ Update to use Firebase!
  }

  /**
   * Hashes a string using SHA256.
   * 
   * @param {string} str - The string to hash.
   * @returns {string} - The hashed string.
   */
  #hashString = (str) => {
    const crypto = window.crypto || window.msCrypto;
    const encoder = new TextEncoder();
    const passwordBytes = encoder.encode(str);
    const hash = crypto.subtle.digest('SHA-256', passwordBytes);
    const hashArray = Array.from(new Uint8Array(hash));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }
}