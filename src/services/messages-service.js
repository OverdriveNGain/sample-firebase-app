
import { doc, setDoc, collection, onSnapshot, query, orderBy } from "firebase/firestore";
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
    const q = query(collection(firestore, "messages"), orderBy("timestamp"));
    onSnapshot(q, (querySnapshot) => {
      const messages = [];
      for (const doc of querySnapshot.docs) {
        messages.push({ ...doc.data(), id: doc.id });
      }
      this.#messages = messages;
      this.setMessages(messages);
    });
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