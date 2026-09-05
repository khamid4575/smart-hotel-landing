"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

export function FAQSection() {
  const t = useTranslations("faq");
  const faqs = [
    {
      question: t("faq1.question"),
      answer:
        t("faq1.answer"),
    },
    {
      question: t("faq2.question"),
      answer:
        t("faq2.answer"),
    },
    {
      question: t("faq3.question"),
      answer:
        t("faq3.answer"),
    },
    {
      question: t("faq4.question"),
      answer:
        t("faq4.answer"),
    },
    {
      question: t("faq5.question"),
      answer:
        t("faq5.answer"),
    },
  ];
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("title")}
          </h2>
        </div>

        <Accordion type="single" collapsible className="fade-in-on-scroll">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
