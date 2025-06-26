"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function HeroSection() {
  const t = useTranslations("hero");
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-on-scroll">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              {/* Revolutionize Your */}
              {t("revolutionizeYour")}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                {/* Hotel Management */}
                {t("hotelManagement")}
              </span>
            </h1>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              Smart Hotel PMS streamlines your operations with intelligent
              booking management, real-time monitoring, and powerful analytics.
              Increase efficiency and boost revenue.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-2"
              >
                Get Consultation
              </Button>
            </div>
          </div>
          <div className="fade-in-on-scroll">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-3xl opacity-20"></div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Smart Hotel PMS Dashboard"
                width={600}
                height={500}
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
