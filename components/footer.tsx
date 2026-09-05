"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"

export function Footer() {
  const t = useTranslations("");
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Smart Hotel
            </h3>
            <p className="text-gray-400 mb-4">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  {t("navigation.features")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  {t("navigation.pricing")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  {t("navigation.about")}
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.support")}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  {t("footer.helpCenter")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  {t("footer.documentation")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  {t("footer.training")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.newsletter")}</h4>
            <p className="text-gray-400 mb-4">{t("footer.newsletterDescription")}</p>
            <div className="flex">
              <Input placeholder={t("footer.enterYourEmail")} className="bg-gray-800 border-gray-700" />
              <Button className="ml-2 bg-gradient-to-r from-blue-600 to-purple-600">{t("footer.subscribe")}</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 Smart Hotel PMS. {t("footer.allRightsReserved")}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white">
              {t("footer.privacyPolicy")}
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              {t("footer.termsOfService")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
