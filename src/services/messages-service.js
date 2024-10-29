
import { doc, setDoc } from "firebase/firestore";
import { mockMessagesTable } from '../mocks/mock-messages-table';
import { firestore } from "../main";

export class MessagesService {
  #messages = [];
  #setFunction = null; // # messages

  /**
   * This function allows the MessagesService instance to update the Application state
   * 
   * This should only be used by the MessagesProvider
   */
  updateSetFunction = (setFunction) => {
    this.#setFunction = setFunction;
  };

  /**
   * This function allows the MessagesService instance to update the Application state
   * 
   * This function should only be used by the MessagesProvider
   */
  setMessages = (messages) => {
    this.#setFunction(messages);
  };

  /**
   * This function is used to asynchronously listen for new messages and fetch messages from the backend
   * and update the component tree
   */
  fetchMessages = () => {
    // ⬇️ ⬇️ ⬇️ Update to use Firebase!

    const intervalMillis = 1000;

    if (this.#messages.length === 0) {
      this.#messages.push(...mockMessagesTable);
    }

    setInterval(() => {
      this.#setFunction(this.#messages)
    }, intervalMillis);

    // ⬆️ ⬆️ ⬆️ Update to use Firebase!
  };

  /**
   * This function is used to send a message to the database
   */
  sendMessage = (message, accountId) => {
    const messageId = crypto.randomUUID();
    const timestamp = new Date().getTime();

    setDoc(doc(firestore, "messages", messageId), {
      from: accountId,
      message: message,
      timestamp: timestamp
    });
  };

  /**
   * This function is used to fetch messages from the last snapshot from the database
   */
  getMessages = () => {
    // ⬇️ ⬇️ ⬇️ Update to use Firebase!

    return [...this.#messages];

    // ⬆️ ⬆️ ⬆️ Update to use Firebase!
  };
}