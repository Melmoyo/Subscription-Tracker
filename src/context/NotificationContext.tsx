import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Notification = {
  message: string;
  type: "error" | "success";
};
type NotificationContextType = {
  showNotification: (toast: Notification) => void;
  notificationsEnabled: boolean;
  toggleNotifications: () => void;
};
const NotificationContext = createContext<NotificationContextType | null>(null);
export function NotificationContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [notification, setNotification] = useState<Notification | null>(null);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const toggleNotifications = () => {
    setNotificationsEnabled((prev) => !prev);
  };
  const showNotification = (notification: Notification) => {
    if (!notificationsEnabled) return;
    setNotification(notification);

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <NotificationContext.Provider
      value={{ showNotification, notificationsEnabled, toggleNotifications }}
    >
      {children}
      {notification && (
        <div className="fixed bottom-4 right-4 bg-bg border border-green text-green px-4 py-2 rounded-lg">
          {notification.message}
        </div>
      )}
    </NotificationContext.Provider>
  );
}
export function useNotificationContext() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("Must be in provider");
  }
  return context;
}
