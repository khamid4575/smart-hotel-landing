"use client"

import Image from "next/image"

export function ScreenshotsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">See Smart Hotel in Action</h2>
          <p className="text-xl text-gray-600">Explore our intuitive dashboard and powerful features</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="fade-in-on-scroll">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Dashboard Overview"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">Dashboard Overview</h3>
            <p className="text-gray-600">Get a complete view of your property's performance at a glance.</p>
          </div>
          <div className="fade-in-on-scroll">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Booking Management"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">Booking Management</h3>
            <p className="text-gray-600">Streamline reservations with our intelligent booking system.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
