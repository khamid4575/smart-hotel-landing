"use client"

import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Hotel Operations?</h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Join 500+ hotels already using Smart Hotel PMS to increase efficiency and revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
