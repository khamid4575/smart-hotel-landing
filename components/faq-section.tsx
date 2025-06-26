"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does implementation take?",
    answer:
      "Implementation typically takes 2-4 weeks depending on your property size and requirements. Our team provides full support throughout the process.",
  },
  {
    question: "Can I migrate data from my current system?",
    answer:
      "Yes, we provide free data migration services from most major PMS systems. Our technical team ensures a smooth transition with zero data loss.",
  },
  {
    question: "Is training provided?",
    answer:
      "We provide comprehensive training for your staff, including video tutorials, documentation, and live training sessions.",
  },
  {
    question: "What integrations are available?",
    answer:
      "Smart Hotel PMS integrates with major booking platforms (Booking.com, Expedia), payment processors, accounting software, and more.",
  },
  {
    question: "Is there a mobile app?",
    answer: "Yes, we offer mobile apps for both iOS and Android, allowing you to manage your property from anywhere.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        </div>

        <Accordion type="single" collapsible className="fade-in-on-scroll">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
