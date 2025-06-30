"use client"

import { useTranslations } from "next-intl"
import { AnimatedCounter } from "./animated-counter"

export function StatisticsSection() {
  const t = useTranslations("statistics")
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center text-white">
          <div className="fade-in-on-scroll">
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <AnimatedCounter end={10} suffix="+" />
            </div>
            <p className="text-xl opacity-90">{t("hotelsOnboard")}</p>
          </div>
          <div className="fade-in-on-scroll">
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <AnimatedCounter end={99} suffix="%" />
            </div>
            <p className="text-xl opacity-90">{t("uptimeGuarantee")}</p>
          </div>
          <div className="fade-in-on-scroll">
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <AnimatedCounter end={10} suffix="K+" />
            </div>
            <p className="text-xl opacity-90">{t("reservationsProcessed")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
