import { notFound } from 'next/navigation'
import { CheckCircle, Clock, Users, DollarSign } from 'lucide-react'
import Image from 'next/image'
import BookingForm from '@/components/BookingForm'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  const service = await prisma.service.findFirst({
    where: { slug }
  })
  
  if (!service || !service.active) {
    notFound()
  }

  const features = service.features ? (Array.isArray(service.features) ? service.features : []) : []
  const showPrice = !!(service.price && service.price > 0)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-amber-100 text-amber-300 text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block">
                {service.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {service.name}
              </h1>
              {service.subtitle && (
                <p className="text-xl text-amber-300 font-semibold mb-6">
                  {service.subtitle}
                </p>
              )}
              <p className="text-lg text-gray-600">
                {service.description}
              </p>
            </div>
            <div className="relative">
              <Image
                src={service.image || '/ABA therapy website image.jpg'}
                alt={service.name}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Service Info */}
            <div className="lg:col-span-2">
              <div className={`grid ${showPrice ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-6 mb-12`}>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Clock className="w-8 h-8 text-amber-300 mx-auto mb-3" />
                  <div className="font-semibold text-gray-900">Duration</div>
                  <div className="text-gray-600">{service.duration} minutes</div>
                </div>
                {showPrice && (
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <div className="font-semibold text-gray-900">Price</div>
                    <div className="text-gray-600">${service.price}</div>
                  </div>
                )}
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="font-semibold text-gray-900">Type</div>
                  <div className="text-gray-600">{service.category}</div>
                </div>
              </div>

              {features.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {service.longDescription && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Service</h2>
                  <div className="prose max-w-none text-gray-600" dangerouslySetInnerHTML={{ __html: service.longDescription }} />
                </div>
              )}

              {service.whoItsFor && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Who It's For</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.whoItsFor}</p>
                </div>
              )}

              {service.approach && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h2>
                  <p className="text-lg text-gray-600">{service.approach}</p>
                </div>
              )}
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <BookingForm serviceName={service.name} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
