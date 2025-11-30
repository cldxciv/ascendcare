import { Heart, Users, Award, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-amber-300">AscendCare</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evidence-Based, Heart-Led. Your Journey, Our Support.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At AscendCare & Early Intervention, we provide comprehensive, evidence-based ABA programs 
                designed to help children build skills, develop independence, and achieve their full potential.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                ABA (Applied Behavior Analysis) is a scientifically supported method that can be used for 
                children with or without autism—it helps modify behaviors, teach new skills, and make 
                learning fun and engaging.
              </p>
              <p className="text-lg text-gray-600">
                Our programs are carefully tailored for individual needs, age, and developmental level, 
                ensuring every child experiences meaningful progress in a supportive, playful environment.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/recreational therapy image 2.jpg"
                alt="Recreational Therapy Session"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-lg text-gray-600">Meet the dedicated professionals behind AscendCare</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <Image
                    src="/nikhil.jpeg"
                    alt="Nikhil Patel"
                    width={200}
                    height={200}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Nikhil Patel</h3>
                  <p className="text-amber-300 font-semibold mb-4">Co-Founder, Director & Senior Behaviour Therapist</p>
                  <p className="text-gray-600 leading-relaxed">
                    With a BAMS degree, a postgraduate diploma in Autism and Behavioural Sciences, Healthcare 
                    Administration & Leadership management, he brings ten years of experience working with children 
                    and five years delivering ABA therapy in Ontario. He leads clinical programs, therapist training, 
                    and family support with a results-driven, evidence-based approach focused on meaningful outcomes 
                    for children with ASD.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-amber-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compassion</h3>
              <p className="text-gray-600">Every child deserves understanding, patience, and care</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">We maintain the highest standards in all our programs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-600">Working together with families for the best outcomes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth</h3>
              <p className="text-gray-600">Celebrating every milestone and achievement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Supervision Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-amber-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">Professional Supervision</h2>
            <p className="text-lg text-gray-700">
              All our services are under regular supervision by a Registered Behaviour Analyst, 
              ensuring the highest quality of care and adherence to best practices in ABA therapy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Let's work together to help your child reach new heights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/booking"
              className="bg-white text-amber-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
