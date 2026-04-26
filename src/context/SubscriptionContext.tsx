import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { MOCK_SUBS } from "../data/mock";
import type { Subscription } from "../types/subscription";

type SubscriptionContextType = {
  subscriptions: Subscription[];
  selectedSub: string | null;
  setSelectedSub: React.Dispatch<React.SetStateAction<string | null>>;
  setSubscriptions: React.Dispatch<React.SetStateAction<Subscription[]>>;
};

const SubscriptionContext = createContext<SubscriptionContextType | null>(null);
export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>(MOCK_SUBS);

  const [selectedSub, setSelectedSub] = useState<string | null>(null);

  return (
    <SubscriptionContext.Provider
      value={{
        subscriptions,
        setSelectedSub,
        selectedSub,
        setSubscriptions,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
}
export function useSubscriptionContext() {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error("Context must be inside provider");
  }
  return context;
}
