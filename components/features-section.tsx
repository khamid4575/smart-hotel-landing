"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart3,
  Calendar,
  Globe,
  Monitor,
  UserCheck,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";

const features = [
  {
    icon: Calendar,
    title: "Booking Management",
    description:
      "Streamline reservations with intelligent booking system and real-time availability.",
  },
  {
    icon: Monitor,
    title: "Real-time Room Monitoring",
    description:
      "Track room status, housekeeping progress, and maintenance needs instantly.",
  },
  {
    icon: BarChart3,
    title: "Financial Reporting",
    description:
      "Comprehensive analytics and reports to optimize revenue and track performance.",
  },
  {
    icon: Users,
    title: "Staff Performance & Productivity",
    description:
      "Efficient staff scheduling, task assignment, and performance tracking.",
  },
  {
    icon: Globe,
    title: "Multi-language & Currency",
    description:
      "Support for international guests with multiple languages and currencies.",
  },
  {
    icon: UserCheck,
    title: "Advanced Security & Access Control",
    description:
      "Protect guest data with robust security protocols, user permissions, and audit trails.",
  },
];

export function FeaturesSection() {
  const t = useTranslations("features");

  const features = [
    {
      icon: Calendar,
      title: t("bookingManagement"),
      description: t("bookingManagementDescription"),
    },
    {
      icon: Monitor,
      title: t("realTimeRoomMonitoring"),
      description: t("realTimeRoomMonitoringDescription"),
    },
    {
      icon: BarChart3,
      title: t("financialReporting"),
      description: t("financialReportingDescription"),
    },
    {
      icon: Users,
      title: t("staffPerformance"),
      description: t("staffPerformanceDescription"),
    },
    {
      icon: Globe,
      title: t("multiLanguageCurrency"),
      description: t("multiLanguageCurrencyDescription"),
    },
    {
      icon: UserCheck,
      title: t("advancedSecurity"),
      description: t("advancedSecurityDescription"),
    },
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("description")}
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
  );
}
