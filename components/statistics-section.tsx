"use client"

import { AnimatedCounter } from "./animated-counter"

export function StatisticsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center text-white">
          <div className="fade-in-on-scroll">
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <AnimatedCounter end={10} suffix="+" />
            </div>
            <p className="text-xl opacity-90">Hotels Onboard</p>
          </div>
          <div className="fade-in-on-scroll">
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <AnimatedCounter end={99} suffix="%" />
            </div>
            <p className="text-xl opacity-90">Uptime Guarantee</p>
          </div>
          <div className="fade-in-on-scroll">
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <AnimatedCounter end={10} suffix="K+" />
            </div>
            <p className="text-xl opacity-90">Reservations Processed</p>
          </div>
        </div>
      </div>
    </section>
  )
}
