import { useMessage } from "src/features/messages/hooks/useMessage";
import MessageContext from "./MessageContext";

export default function MessageProvder({ children }) {
  const useMessageMethods = useMessage();

  const MessageMethods = {
    ...useMessageMethods,
  };

  return (
    <MessageContext.Provider value={MessageMethods}>
      {children}
    </MessageContext.Provider>
  );
}
