"use client"

import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

export function CTASection() {
  const t = useTranslations("");
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t("cta.title")}</h2>
          <p className="text-xl text-white opacity-90 mb-8">{t("cta.description")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              {t("cta.startFreeTrial")}
            </Button>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
            >
              {t("hero.getConsultation")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
