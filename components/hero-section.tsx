"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  const t = useTranslations("hero");
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-100">
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
              {t("description")}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="https://smart-hotel-eta.vercel.app/">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3"
                >
                  {t("getStartedFree")} 
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-3 border-2"
                >
                  {t("getConsultation")}
                </Button>
              </Link>
            </div>
          </div>
          <div className="fade-in-on-scroll">
            <div className="relative">
              <div className=" rounded-2xl blur-3xl opacity-20"></div>
              {/* <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Smart Hotel PMS Dashboard"
                width={600}
                height={500}
                className="relative rounded-2xl shadow-2xl"
              /> */}
              <Image
                src="/hero.png"
                alt="Smart Hotel PMS Dashboard"
                width={600}
                height={500}
                className=" h-[460px] !w-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
