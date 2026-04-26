import { useContext, createContext } from "react";
import type { ReactNode } from "react";
import { useSubscriptionContext } from "./SubscriptionContext";
import type { Subscription } from "../types/subscription";

type StatContextType = {
  monthlySpend: number;
  annualSpend: number;
  renewingSoon: Subscription[];
  averagePerSub: number;
};
const StatContext = createContext<StatContextType | null>(null);
export function StatContextProvider({ children }: { children: ReactNode }) {
  const { subscriptions } = useSubscriptionContext();
  const monthlySpend = subscriptions.reduce((acc, sub) => {
    return acc + sub.amount;
  }, 0);
  const annualSpend = monthlySpend * 12;
  const averagePerSub =
    subscriptions.length > 0 ? monthlySpend / subscriptions.length : 0;
  const now = new Date();

  const renewingSoon = subscriptions.filter((sub) => {
    const renewal = new Date(sub.renewalDate);

    const diffInMs = renewal.getTime() - now.getTime();
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    return diffInDays >= 0 && diffInDays <= 7;
  });
  return (
    <StatContext.Provider
      value={{ annualSpend, averagePerSub, renewingSoon, monthlySpend }}
    >
      {children}
    </StatContext.Provider>
  );
}
export function useStatContext() {
  const context = useContext(StatContext);
  if (!context) {
    throw new Error("Must be inside provider");
  }
  return context;
}
