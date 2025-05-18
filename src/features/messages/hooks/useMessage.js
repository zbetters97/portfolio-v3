import { addDoc, collection } from "firebase/firestore";
import { db } from "src/config/firebase";

export function useMessage() {
  async function addMessage(name, email, message) {
    // Validate data
    if (name === "" || email === "" || message === "") {
      return false;
    }

    try {
      // Create new message object
      const newMessage = {
        name,
        email,
        message,
      };

      // Connect to firestore collection
      const messagesRef = collection(db, "messages");

      // If collection exists...
      if (messagesRef !== null) {
        // Add new message
        await addDoc(messagesRef, newMessage);
      }

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  return {
    addMessage,
  };
}
