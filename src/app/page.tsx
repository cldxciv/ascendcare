'use client'

import { ArrowRight, Heart, Users, Star, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const heroSlides = [
  {
    title: 'Evidence-Based, Heart-Led',
    subtitle: 'Your Journey, Our Support. Reach New Heights',
    description: 'Comprehensive ABA programs designed to help children build skills, develop independence, and achieve their full potential.',
    image: '/ABA therapy website image.jpg'
  },
  {
    title: 'Early Intervention, Lasting Impact',
    subtitle: 'Building Foundations for Success',
    description: 'Specialized early intervention programs that make a meaningful difference in your child\'s developmental journey.',
    image: '/Speech therapy image 1.jpg'
  },
  {
    title: 'Social Skills, Real Connections',
    subtitle: 'Helping Children Thrive Together',
    description: 'Group programs designed to help children develop meaningful friendships and essential social skills.',
    image: '/social-skills.png'
  }
]

const latestPosts = [
  {
    id: '1',
    title: 'Understanding ABA Therapy: A Parent\'s Guide',
    slug: 'understanding-aba-therapy-parents-guide',
    excerpt: 'Learn the fundamentals of Applied Behavior Analysis and how it can help your child reach their full potential.',
    image: '/ABA therapy website image.jpg',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Early Intervention: Why Starting Early Matters',
    slug: 'early-intervention-why-starting-early-matters',
    excerpt: 'Discover the importance of early intervention and how it can make a significant difference in your child\'s development.',
    image: '/speech therapy image 2.jpg',
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    title: 'Building Social Skills: Tips for Parents',
    slug: 'building-social-skills-tips-parents',
    excerpt: 'Practical strategies to help your child develop meaningful friendships and social connections.',
    image: '/Speech therapy image 1.jpg',
    createdAt: new Date().toISOString()
  }
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('/api/admin/services')
      .then(res => res.json())
      .then(data => setServices(data.filter((s: any) => s.active).slice(0, 6)))
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  const slide = heroSlides[currentSlide]
  const titleParts = slide.title.split(',')

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-indigo-100 py-20 min-h-[600px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                {titleParts[0]},
                <span className="text-amber-300 block">{titleParts[1]?.trim()}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {slide.subtitle && `${slide.subtitle} `}
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/services" 
                  className="bg-amber-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
                >
                  Explore Services <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/booking" 
                  className="border-2 border-amber-300 text-amber-300 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative w-full h-[400px]">
                <Image
                  src={slide.image}
                  alt="ABA Therapy Session"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-amber-300" />
            </button>
            
            <div className="flex gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-amber-300' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-amber-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-amber">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-4xl font-bold text-amber-300 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Children Helped</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-4xl font-bold text-amber-300 mb-2">14</div>
              <div className="text-gray-700 font-medium">Specialized Programs</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-4xl font-bold text-amber-300 mb-2">95%</div>
              <div className="text-gray-700 font-medium">Success Rate</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-4xl font-bold text-amber-300 mb-2">10+</div>
              <div className="text-gray-700 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-900"></div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-300 to-amber-800 bg-clip-text text-transparent">
                Why Choose AscendCare?
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-amber-900"></div>
            </div>
            <p className="text-lg text-gray-600">Evidence-based programs with heart-led approach</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Heart-Led Approach</h3>
              <p className="text-gray-600">Compassionate care that puts your child's wellbeing first</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Evidence-Based</h3>
              <p className="text-gray-600">Scientifically supported ABA methods with proven results</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Comprehensive Programs</h3>
              <p className="text-gray-600">14 specialized programs from early intervention to vocational training</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="relative mb-6">
              <h2 className="text-4xl font-bold text-gray-900 relative z-10">
                Our Services
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-900 rounded-full"></div>
              </h2>
            </div>
            <p className="text-lg text-gray-600">Comprehensive ABA programs for every stage of development</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video relative">
                  <Image
                    src={service.image || '/ABA therapy website image.jpg'}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-end">
                    <Link 
                      href={`/services/${service.slug}`}
                      className="bg-amber-300 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="bg-amber-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors inline-flex items-center gap-2"
            >
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-300 to-amber-900 max-w-20"></div>
              <h2 className="text-4xl font-bold text-amber-300 mx-6 relative">
                Latest from Our Blog
                <span className="absolute -top-1 -right-2 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
              </h2>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-300 to-amber-900 max-w-20"></div>
            </div>
            <p className="text-lg text-gray-600">Insights, tips, and resources for families</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <article className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all overflow-hidden border border-gray-200">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-amber-300 text-sm font-medium">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-amber-300 font-semibold hover:text-amber-700 transition-colors"
            >
              View All Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-amber-300 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-amber-300 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-4">
              <h2 className="text-4xl font-bold text-gray-900 relative">
                What Families Say
                <div className="absolute -top-3 -left-3 w-6 h-6 border-2 border-amber-400 rounded-full opacity-30"></div>
                <div className="absolute -bottom-3 -right-3 w-4 h-4 bg-amber-500 rounded-full opacity-40"></div>
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-8">Real stories from families we've helped</p>
            <div className="flex justify-center items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <span>4.9/5 Average Rating</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <span>500+ Happy Families</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">"</span>
              </div>
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                "The 1:1 ABA therapy has been life-changing for our son. The therapists are incredibly patient and skilled. We've seen remarkable progress in just 6 months."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-300 font-semibold text-sm">SM</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah M.</div>
                  <div className="text-sm text-gray-500">Parent of 7-year-old</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">"</span>
              </div>
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                "The social skills groups helped our daughter make friends and gain confidence. Amazing program! She looks forward to every session."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">MR</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Michael R.</div>
                  <div className="text-sm text-gray-500">Parent of 9-year-old</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">"</span>
              </div>
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                "Professional, caring, and effective. The parent coaching sessions were invaluable for our family. We feel so much more confident now."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold text-sm">JL</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Jennifer L.</div>
                  <div className="text-sm text-gray-500">Parent of 5-year-old</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/testimonials" 
              className="inline-flex items-center gap-2 text-amber-300 font-semibold hover:text-amber-700 transition-colors bg-amber-50 px-6 py-3 rounded-lg hover:bg-amber-100"
            >
              Read More Success Stories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-300 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/60 rounded-full animate-pulse delay-1000"></div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4 relative">
            Ready to Begin Your Journey?
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-white/30 rounded-full"></div>
          </h2>
          <p className="text-xl text-white/90 mb-6">
            Let's work together to help your child reach new heights
          </p>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of families who have seen remarkable progress through our evidence-based ABA programs. 
            Take the first step towards unlocking your child's potential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link 
              href="/booking" 
              className="bg-white text-amber-300 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-all inline-flex items-center gap-2 shadow-lg"
            >
              Schedule Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center gap-2"
            >
              Learn More
            </Link>
          </div>
          
          <div className="flex justify-center items-center gap-8 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span>Flexible Scheduling</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span>Personalized Plans</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
