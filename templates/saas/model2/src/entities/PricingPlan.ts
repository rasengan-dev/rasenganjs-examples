export type PricingPlan = {
  category: "standard" | "growth" | "basic";
  period?: "weekly" | "month" | "year";
  tag?: "popular" | "best" | "new";
  description: string;
  price: {
    value: number;
    description?: string;
  };
  features?: (string | JSX.Element)[];
};
