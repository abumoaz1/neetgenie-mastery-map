import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "NEETGenie Free",
    price: "₹0",
    features: ["Basic AI assistance", "Limited mock tests", "NCERT summaries"],
  },
  {
    name: "NEETGenie Pro",
    price: "₹999/month",
    popular: true,
    features: [
      "Priority AI Queue",
      "Unlimited mock tests",
      "Personalized study plan",
      "Performance analytics",
    ],
  },
  {
    name: "NEETGenie Elite",
    price: "₹1,999/month",
    features: [
      "1-on-1 AI mentoring",
      "Advanced AIR predictions",
      "Custom test creation",
      "Priority support 24/7",
      "Parent dashboard",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Choose Your Success Path
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular ? "border-2 border-primary shadow-lg" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm text-white">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <p className="text-3xl font-bold">{plan.price}</p>
              </CardHeader>
              <CardContent>
                <ul className="mb-6 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};