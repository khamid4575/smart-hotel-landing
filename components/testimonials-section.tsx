"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "General Manager",
    hotel: "Grand Plaza Hotel",
    content:
      "Smart Hotel PMS transformed our operations. We've seen a 40% increase in efficiency and our guests love the seamless experience.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Operations Director",
    hotel: "Seaside Resort",
    content:
      "The real-time monitoring and automated reporting features have been game-changers for our 200-room property.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Hotel Manager",
    hotel: "City Center Inn",
    content:
      "Implementation was smooth and the support team is exceptional. Our revenue has increased by 25% since switching.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="fade-in-on-scroll border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 mb-6 italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div>
                <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</p>
                <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                <p className="text-blue-600">{testimonials[currentTestimonial].hotel}</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
