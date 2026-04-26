// src/types/subscription.ts
export interface Subscription {
  id: string;
  name: string;
  amount: number;
  billingCycle: string;
  category: string;
  renewalDate: string;
  color?: string;
  logo: string;
  notes: string;
}
