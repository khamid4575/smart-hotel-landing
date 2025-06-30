"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useTranslations } from "next-intl"

const pricingPlans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small hotels and B&Bs",
    features: [
      "Up to 50 rooms",
      "Basic booking management",
      "Standard reporting",
      "Email support",
      "Mobile app access",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "$99",
    period: "/month",
    description: "Ideal for mid-size hotels and resorts",
    features: [
      "Up to 200 rooms",
      "Advanced booking management",
      "Real-time analytics",
      "Priority support",
      "Staff management tools",
      "Multi-property support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large hotel chains and resorts",
    features: [
      "Unlimited rooms",
      "Full feature access",
      "Custom integrations",
      "24/7 dedicated support",
      "Advanced security",
      "Custom training",
    ],
    popular: false,
  },
]

export function PricingSection() {
  const t = useTranslations("pricing")
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("title")}</h2>
          <p className="text-xl text-gray-600">{t("description")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`fade-in-on-scroll relative ${plan.popular ? "border-2 border-blue-600 shadow-xl" : "border-0 shadow-lg"}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600">
                  {t("mostPopular")}
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">
                  {plan.price}
                  <span className="text-lg font-normal text-gray-600">{plan.period}</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" : ""}`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
