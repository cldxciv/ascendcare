import { Star, Quote, Heart, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Parent of 7-year-old",
    service: "1:1 ABA Therapy",
    rating: 5,
    text: "The 1:1 ABA therapy has been life-changing for our son. The therapists are incredibly patient and skilled. We've seen remarkable progress in just 6 months. His communication skills have improved dramatically, and he's more confident in social situations.",
    highlight: "Remarkable progress in 6 months",
    color: "blue"
  },
  {
    id: 2,
    name: "Michael R.",
    role: "Parent of 9-year-old",
    service: "Social Skills Groups",
    rating: 5,
    text: "The social skills groups helped our daughter make friends and gain confidence. Amazing program! She looks forward to every session and has developed lasting friendships. The structured approach really works.",
    highlight: "Developed lasting friendships",
    color: "green"
  },
  {
    id: 3,
    name: "Jennifer L.",
    role: "Parent of 5-year-old",
    service: "Parent Coaching",
    rating: 5,
    text: "Professional, caring, and effective. The parent coaching sessions were invaluable for our family. We feel so much more confident now in supporting our child's development at home.",
    highlight: "Feel much more confident",
    color: "purple"
  },
  {
    id: 4,
    name: "David K.",
    role: "Parent of 8-year-old",
    service: "Early Intervention",
    rating: 5,
    text: "Starting early intervention at AscendCare was the best decision we made. The team created a personalized plan that addressed all of our son's needs. His progress has exceeded our expectations.",
    highlight: "Progress exceeded expectations",
    color: "orange"
  },
  {
    id: 5,
    name: "Lisa T.",
    role: "Parent of 6-year-old",
    service: "School Readiness Program",
    rating: 5,
    text: "The school readiness program prepared our daughter beautifully for kindergarten. She's now thriving in her classroom and the teachers are amazed by her social and academic skills.",
    highlight: "Thriving in kindergarten",
    color: "pink"
  },
  {
    id: 6,
    name: "Robert H.",
    role: "Parent of 10-year-old",
    service: "Life Skills Program",
    rating: 5,
    text: "The life skills program has given our son independence we never thought possible. He can now manage his daily routines and is so proud of his accomplishments.",
    highlight: "Independence never thought possible",
    color: "indigo"
  }
]

const stats = [
  { number: "500+", label: "Families Served", icon: Users },
  { number: "4.9/5", label: "Average Rating", icon: Star },
  { number: "95%", label: "Success Rate", icon: CheckCircle },
  { number: "10+", label: "Years Experience", icon: Heart }
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Real families sharing their journey with AscendCare. Discover how our evidence-based ABA programs have transformed lives and created lasting positive change.
            </p>
            <div className="flex justify-center">
              <Quote className="w-16 h-16 text-white/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center border border-amber-100">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-amber-300" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Families Are Saying
            </h2>
            <p className="text-lg text-gray-600">
              Authentic stories from families who have experienced the AscendCare difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Color accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-${testimonial.color}-500`}></div>
                
                {/* Quote icon */}
                <div className={`w-10 h-10 bg-${testimonial.color}-100 rounded-full flex items-center justify-center mb-6`}>
                  <Quote className={`w-5 h-5 text-${testimonial.color}-600`} />
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Service badge */}
                <div className={`inline-block px-3 py-1 bg-${testimonial.color}-50 text-${testimonial.color}-700 text-sm font-medium rounded-full mb-4`}>
                  {testimonial.service}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Highlight */}
                <div className={`bg-${testimonial.color}-50 border-l-4 border-${testimonial.color}-400 p-3 mb-6`}>
                  <p className={`text-${testimonial.color}-800 font-medium text-sm`}>
                    Key Result: {testimonial.highlight}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <div className={`w-12 h-12 bg-${testimonial.color}-100 rounded-full flex items-center justify-center mr-4`}>
                    <span className={`text-${testimonial.color}-600 font-semibold`}>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of families who have transformed their children's lives with our evidence-based ABA programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/booking" 
              className="bg-white text-amber-300 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-all inline-flex items-center justify-center gap-2 shadow-lg"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
