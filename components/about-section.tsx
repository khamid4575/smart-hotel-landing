"use client";

import { Badge } from "@/components/ui/badge";
import { Check, BarChart3, Calendar } from "lucide-react";
import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("about");
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="fade-in-on-scroll">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-700 mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              {t("title")}
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Transforming
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Hospitality
              </span>
              <br />
              One Hotel at a Time
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t("description")}
            </p>

            {/* Key points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {t("eliminateManualProcesses")}
                  </h4>
                  <p className="text-gray-600">
                    {t("eliminateManualProcessesDescription")}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {t("maximizeRevenuePotential")}
                  </h4>
                  <p className="text-gray-600">
                    {t("maximizeRevenuePotentialDescription")}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {t("enhanceGuestExperience")}
                  </h4>
                  <p className="text-gray-600">
                    {t("enhanceGuestExperienceDescription")}
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  2025
                </div>
                <div className="text-sm text-gray-600">{t("founded")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">3+</div>
                <div className="text-sm text-gray-600">{t("teamMembers")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  24/7
                </div>
                <div className="text-sm text-gray-600">{t("support")}</div>
              </div>
            </div>
          </div>

          {/* Right side - Visual elements */}
          <div className="fade-in-on-scroll">
            <div className="relative">
              {/* Main image container */}
              <div className="relative z-10">
                <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                          <BarChart3 className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {t("revenueAnalytics")}
                          </div>
                          <div className="text-sm text-gray-500">
                            {t("realTimeInsights")}
                          </div>
                        </div>
                      </div>
                      <div className="text-green-500 font-semibold">+24%</div>
                    </div>

                    <div className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-end justify-center p-4">
                      <div className="flex items-end space-x-2">
                        <div className="w-4 h-16 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t"></div>
                        <div className="w-4 h-20 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t"></div>
                        <div className="w-4 h-12 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t"></div>
                        <div className="w-4 h-24 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 z-20">
                <div className="bg-white rounded-xl shadow-lg p-4 transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        {t("room")} 204
                      </div>
                      <div className="text-xs text-gray-500">{t("cleaned")}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 z-20">
                <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-12 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Calendar className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        {t("newBooking")}
                      </div>
                      <div className="text-xs text-gray-500">{t("suite")} 301</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background decorative circle */}
              <div className="absolute inset-0 -z-10">
                <div className="w-full h-full bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl transform scale-150"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission statement */}
        <div className="mt-20 text-center fade-in-on-scroll">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {t("ourMission")}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t("ourMissionDescription")}
            </p>

            {/* Target audience badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm bg-blue-100 text-blue-700 hover:bg-blue-200"
              >
                {t("comprehensive")}
              </Badge>
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm bg-purple-100 text-purple-700 hover:bg-purple-200"
              >
                {t("efficient")}
              </Badge>
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm bg-green-100 text-green-700 hover:bg-green-200"
              >
                {t("excellence")}
              </Badge>
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm bg-orange-100 text-orange-700 hover:bg-orange-200"
              >
                {t("costEffective")}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
