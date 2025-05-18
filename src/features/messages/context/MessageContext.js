import { createContext, useContext } from "react";

const MessageContext = createContext();

export function useMessageContext() {
  const context = useContext(MessageContext);

  if (context === undefined) {
    throw new Error(
      "Error! useMessageContext must be used within MessageProvidor."
    );
  }

  return context;
}

export default MessageContext;
