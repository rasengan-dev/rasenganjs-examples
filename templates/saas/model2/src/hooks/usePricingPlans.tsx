import { PricingPlan } from "@/entities/PricingPlan";

const PricingPlans: PricingPlan[] = [
  {
    category: "standard",
    tag: "popular",
    description:
      "One request at a time. For companies who need on-going design support.",
    price: {
      value: 2.995,
    },
    features: [
      "1x active task at a time",
      "Unlimited revisions",
      "Dedicated project manager",
      "Daily comms through Slack",
      "Work with senior designers",
      "2-3 days turn around time",
      "Top tier design",
    ],
  },
  {
    category: "growth",
    tag: "best",
    description:
      "Double the requests. For companies with increasing design needs. Limited spots.",
    price: {
      value: 4.795,
    },
    features: [
      <span>
        <span className="text-[#B9FD50]">2x active task</span> at a time
      </span>,
      "Unlimited revisions",
      "Dedicated project manager",
      "Daily comms through Slack",
      "Work with senior designers",
      "2-3 days turn around time",
      "Top tier design",
    ],
  },
  {
    category: "basic",
    period: "weekly",
    description:
      "Perfect if you want to try the subscription out or only have a few one-off tasks.",
    price: {
      value: 890,
    },
    features: [
      "Fixed scope of work",
      "2 rounds of revisions",
      "Dedicated project manager",
      "Daily comms through Slack",
      "1x designers",
      "2-5 days turn around time",
      "Top tier design",
    ],
  },
];

const usePricingPlans = () => {
  return {
    pricingPlans: PricingPlans,
  };
};

export default usePricingPlans;
