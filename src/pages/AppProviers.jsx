import MessageProvder from "src/features/messages/context/MessageProvider";

export default function AppProviders({ children }) {
  return <MessageProvder>{children}</MessageProvder>;
}
