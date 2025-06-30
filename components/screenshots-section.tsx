"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"

export function ScreenshotsSection() {
  const t = useTranslations("screenshots")
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("title")}</h2>
          <p className="text-xl text-gray-600">{t("description")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="fade-in-on-scroll">
            <Image
              // src="/placeholder.svg?height=400&width=600"
              src="/dashboard.png"
              alt="Dashboard Overview"
              width={600}
              height={400}
              className="rounded-lg object-cover h-[400px] shadow-lg"
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">{t("dashboardOverview")}</h3>
            <p className="text-gray-600">{t("dashboardOverviewDescription")}</p>
          </div>
          <div className="fade-in-on-scroll">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Booking Management"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">{t("bookingManagement")}</h3>
            <p className="text-gray-600">{t("bookingManagementDescription")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
