import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="text-amber-300">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to begin your journey? We're here to help answer your questions 
            and guide you through our services.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">Call us for immediate assistance</p>
                    <a href="tel:+19055366313" className="text-amber-300 hover:text-amber-300 font-medium">
                      +1(905)536-6313
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">Send us a message anytime</p>
                    <a href="mailto:info@aceinterventions.com" className="text-amber-300 hover:text-amber-300 font-medium">
                      info@aceinterventions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">Serving families across Ontario</p>
                    <p className="text-gray-700 font-medium">Ontario, Canada</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Hours</h3>
                    <p className="text-gray-600">We're here when you need us</p>
                    <div className="text-gray-700">
                      <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                      <p>Saturday - Sunday: 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Quick Actions</h2>
              
              <div className="space-y-4">
                <div className="bg-amber-50 p-6 rounded-lg border border-amber-300">
                  <h3 className="text-xl font-semibold text-amber-300 mb-3">Book a Session</h3>
                  <p className="text-amber-300 mb-4">
                    Ready to get started? Schedule your consultation or therapy session online.
                  </p>
                  <a 
                    href="/booking"
                    className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors inline-block"
                  >
                    Book Now
                  </a>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold text-green-900 mb-3">Learn About Services</h3>
                  <p className="text-green-700 mb-4">
                    Explore our comprehensive range of ABA programs and find the right fit.
                  </p>
                  <a 
                    href="/services"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
                  >
                    View Services
                  </a>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h3 className="text-xl font-semibold text-purple-900 mb-3">Emergency Support</h3>
                  <p className="text-purple-700 mb-4">
                    Need immediate assistance? Our crisis support team is available 24/7.
                  </p>
                  <a 
                    href="tel:+19055366313"
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What age groups do you serve?
              </h3>
              <p className="text-gray-600">
                We serve children from toddlers to teens, with programs specifically designed 
                for different developmental stages and needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you accept insurance?
              </h3>
              <p className="text-gray-600">
                We work with most major insurance providers. Please contact us to verify 
                your coverage and discuss payment options.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do I know which program is right for my child?
              </h3>
              <p className="text-gray-600">
                Our team will conduct an initial assessment and consultation to recommend 
                the most appropriate program based on your child's unique needs and goals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What should I expect in the first session?
              </h3>
              <p className="text-gray-600">
                The first session typically involves an assessment, goal setting, and 
                getting to know your child. We'll also answer any questions you have 
                about our approach and programs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
