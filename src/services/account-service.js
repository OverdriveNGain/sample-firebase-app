
import { mockAuth } from '../mocks/mock-users';

export class AccountService {
  constructor() {
    this.setFunction = null;
    this.currentUser = null;
  }

  /**
   * This function allows the AuthService instance to update the Application state
   * 
   * This should only be used by the AuthProvider
   */
  updateSetFunction = (setFunction) => {
    this.setFunction = setFunction;
  };

  /**
   * This function allows the AuthService instance to update the Application state
   * 
   * This function should only be used by the AuthProvider
   */
  setAuth = (users) => {
    this.setFunction(users);
  };

  /**
   * Logs in a user with the provided username and password.
   * 
   * @param {string} username - The username of the user.
   * @param {string} password - The password of the user.
   * @returns {{success: boolean, error: string | null}} - An object containing the success status and an error message if applicable.
   */
  login = (username, password) => {
    // ⬇️ ⬇️ ⬇️ Update to use Firebase!

    const hashString = this.#hashString(password);

    if (mockAuth.filter(user => user.id === username && user.password === hashString).length > 0) {
      return {
        success: true
      }
    }

    return {
      success: false,
      error: "Invalid username or password"
    };

    // ⬆️ ⬆️ ⬆️ Update to use Firebase!
  };

  /**
   * Logs in a user with the provided username and password.
   * 
   * @param {string} username - The username of the user.
   * @param {string} password - The password of the user.
   * @returns {{success: boolean, error: string | null}} - An object containing the success status and an error message if applicable.
   */
  register = (userId, password) => {
    // ⬇️ ⬇️ ⬇️ Update to use Firebase!

    const hashString = this.#hashString(password);

    if (mockAuth.filter(user => user.id === userId).length > 0) {
      return {
        success: false,
        error: "User already exists"
      }
    }

    mockAuth.push({ id: userId, password: hashString });
    return {
      success: true
    };

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