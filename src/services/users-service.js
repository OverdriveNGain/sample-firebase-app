
import { mockUsers } from '../mocks/mock-users';

export class UsersService {
  constructor() {
    this.setFunction = null;
    this.users = [];
  }

  /**
   * This function allows the UsersService instance to update the Application state
   * 
   * This should only be used by the UsersProvider
   */
  updateSetFunction = (setFunction) => {
    this.setFunction = setFunction;
  };

  /**
   * This function allows the UsersService instance to update the Application state
   * 
   * This function should only be used by the UsersProvider
   */
  setUsers = (users) => {
    this.setFunction(users);
  };


  /**
   * This function is used to asynchronously listen for new users and fetch users from the backend
   * and call a callback for every result
   * 
   * @param {Function} callback - a function that takes a parameter. If the operation was successful the parameter is an array of users. If the operation failed, the parameter is a string with an error message
   */
  fetchUsers = (callback) => {
    // ⬇️ ⬇️ ⬇️ Update to use Firebase!

    const intervalMillis = 2000;

    if (this.users.length === 0) {
      this.users.push(...mockUsers);
    }

    setInterval(() => {
      callback([
        ...this.users
      ]);
    }, intervalMillis);

    // ⬆️ ⬆️ ⬆️ Update to use Firebase!
  };
}