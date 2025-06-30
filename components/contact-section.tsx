"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useTranslations } from "next-intl"

export function ContactSection() {
  const t = useTranslations("contacts")
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("title")}</h2>
          <p className="text-xl text-gray-600">{t("description")}</p>
        </div>

        <Card className="fade-in-on-scroll border-0 shadow-lg">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("name")}</label>
                  <Input placeholder={t("yourFullName")} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("email")}</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("phone")}</label>
                  <Input placeholder={t("yourPhoneNumber")} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("hotelName")}</label>
                  <Input placeholder={t("yourHotelName")} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t("message")}</label>
                <Textarea placeholder={t("yourMessage")} rows={4} />
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-3">
                {t("sendMessage")}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
