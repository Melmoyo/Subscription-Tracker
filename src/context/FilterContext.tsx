import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { useState, useMemo } from "react";
import type { Subscription } from "../types/subscription";
import { useSubscriptionContext } from "./SubscriptionContext";
export type Filters = {
  sortBy: "newest" | "oldest" | "az" | "highlow" | "lowhigh";
  category: string;
  searchInput: string;
};
type FilterContextType = {
  filteredsub: Subscription[];
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};
const FilterContext = createContext<FilterContextType | null>(null);
export function FilterContextProvider({ children }: { children: ReactNode }) {
  const { subscriptions } = useSubscriptionContext();
  const [filters, setFilters] = useState<Filters>({
    sortBy: "newest",
    category: "all",
    searchInput: "",
  });
  const filteredsub = useMemo(() => {
    let result = [...subscriptions];
    if (filters.searchInput.trim()) {
      const query = filters.searchInput.toLowerCase();
      result = result.filter(
        (sub) =>
          sub.name.toLowerCase().includes(query) ||
          sub.category.toLowerCase().includes(query),
      );
    }

    if (filters.category !== "all") {
      result = result.filter((sub) => sub.category === filters.category);
    }

    if (filters.sortBy === "newest") {
      result.sort(
        (a, b) =>
          new Date(b.renewalDate).getTime() - new Date(a.renewalDate).getTime(),
      );
    } else if (filters.sortBy === "oldest") {
      result.sort(
        (a, b) =>
          new Date(a.renewalDate).getTime() - new Date(b.renewalDate).getTime(),
      );
    } else if (filters.sortBy === "az") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filters.sortBy === "highlow") {
      result.sort((a, b) => b.amount - a.amount);
    } else if (filters.sortBy === "lowhigh") {
      result.sort((a, b) => a.amount - b.amount);
    }

    return result;
  }, [subscriptions, filters]);

  return (
    <FilterContext.Provider value={{ filteredsub, filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
}
export function useFilterContext() {
  const context = useContext(FilterContext);
  if (!context) throw new Error("Context needs to be inside the provider");
  return context;
}
