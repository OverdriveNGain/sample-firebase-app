
import { mockMessages } from '../mocks/mock-messages';

export class MessagesService {
  constructor() {
    this.setFunction = null;
    this.messages = [];
  }

  /**
   * This function allows the MessagesService instance to update the Application state
   * 
   * This should only be used by the MessagesProvider
   */
  updateSetFunction = (setFunction) => {
    this.setFunction = setFunction;
  };

  /**
   * This function allows the MessagesService instance to update the Application state
   * 
   * This function should only be used by the MessagesProvider
   */
  setMessages = (messages) => {
    this.setFunction(messages);
  };


  /**
   * This function is used to asynchronously listen for new messages and fetch messages from the backend
   * and update the component tree
   * 
   * @param {Function} callback - a function that takes a parameter. If the operation was successful the parameter is an array of messages. If the operation failed, the parameter is a string with an error message
   */
  fetchMessages = (callback) => {
    // ⬇️ ⬇️ ⬇️ Update to use Firebase!

    const intervalMillis = 2000;

    if (this.messages.length === 0) {
      this.messages.push(...mockMessages);
    }

    setInterval(() => {
      callback([
        ...this.messages
      ]);
    }, intervalMillis);

    // ⬆️ ⬆️ ⬆️ Update to use Firebase!
  };

  sendMessage = (message, accountId) => {
    // ⬇️ ⬇️ ⬇️ Update to use Firebase!

    const messageId = crypto.randomUUID();
    const timestamp = new Date().getTime();

    this.messages.push({
      id: messageId,
      from: accountId,
      message,
      timestamp,
    });

    // ⬆️ ⬆️ ⬆️ Update to use Firebase!
  };

  getMessages = () => {
    // ⬇️ ⬇️ ⬇️ Update to use Firebase!

    return [...this.messages];

    // ⬆️ ⬆️ ⬆️ Update to use Firebase!
  };
}