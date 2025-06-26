"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Monitor, BarChart3, Users, Globe, UserCheck } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Booking Management",
    description: "Streamline reservations with intelligent booking system and real-time availability.",
  },
  {
    icon: Monitor,
    title: "Real-time Room Monitoring",
    description: "Track room status, housekeeping progress, and maintenance needs instantly.",
  },
  {
    icon: BarChart3,
    title: "Financial Reporting",
    description: "Comprehensive analytics and reports to optimize revenue and track performance.",
  },
  {
    icon: Users,
    title: "Staff Management",
    description: "Efficient staff scheduling, task assignment, and performance tracking.",
  },
  {
    icon: Globe,
    title: "Multi-language & Currency",
    description: "Support for international guests with multiple languages and currencies.",
  },
  {
    icon: UserCheck,
    title: "Guest Self Check-in/out",
    description: "Contactless check-in and check-out for enhanced guest experience.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Powerful Features for Modern Hotels</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Designed to help you operate efficiently and create exceptional guest experiences 24/7
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="fade-in-on-scroll hover:shadow-lg transition-all duration-300 border-0 shadow-md"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
