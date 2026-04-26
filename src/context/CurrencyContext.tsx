import { createContext, useContext, useState, useMemo } from "react";
import type { ReactNode } from "react";

type Currency = "ZAR" | "USD" | "GBP" | "EUR";

type CurrencyContextType = {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  currFormat: (amount: number) => string;
  cycleCurrency: () => void;
  symbol: string;
};
const rates: Record<Currency, number> = {
  ZAR: 1,
  USD: 0.054,
  EUR: 0.051,
  GBP: 0.043, // example rate
};
const currencies = ["ZAR", "USD", "EUR", "GBP"] as const;
const CurrencyContext = createContext<CurrencyContextType | null>(null);
export function CurrencyContextProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");
  const symbol =
    currency === "ZAR"
      ? "R"
      : currency === "GBP"
        ? "£"
        : currency === "EUR"
          ? "€"
          : "$";
  type Currency = (typeof currencies)[number];
  const currFormat = (amountInZAR: number) => {
    const converted = amountInZAR * rates[currency];

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(converted);
  };
  const cycleCurrency = () => {
    setCurrency((prev) => {
      const index = currencies.indexOf(prev);
      return currencies[(index + 1) % currencies.length];
    });
  };
  const value = useMemo(
    () => ({ currency, setCurrency, currFormat, cycleCurrency, symbol }),
    [currency],
  );

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}
export function useCurrencyContext() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must  be inside CurrencyProvider");
  }
  return context;
}
