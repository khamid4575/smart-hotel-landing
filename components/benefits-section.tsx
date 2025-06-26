"use client"

import { Clock, TrendingUp, Shield, Zap } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Automate routine tasks and reduce manual work by 70%",
  },
  {
    icon: TrendingUp,
    title: "Increase Revenue",
    description: "Optimize pricing and occupancy rates with smart analytics",
  },
  {
    icon: Shield,
    title: "Reduce Errors",
    description: "Minimize human errors with automated processes",
  },
  {
    icon: Zap,
    title: "Easy to Use",
    description: "Intuitive interface that requires minimal training",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Smart Hotel PMS?</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center fade-in-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
