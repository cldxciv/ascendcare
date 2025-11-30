import { CheckCircle, Users, Clock, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { prisma } from '@/lib/prisma'

const services = [
  {
    id: '1-1-aba',
    name: '1:1 ABA Therapy',
    subtitle: 'Personalized, Child-Centered Learning',
    description: 'Individualized ABA therapy with one-on-one sessions tailored to your child\'s strengths, learning style, and goals.',
    features: [
      'Communication and language development',
      'Social interaction and play skills',
      'Daily living skills and independence',
      'Academic readiness preparation',
      'Behavior support and modification'
    ],
    category: 'Individual'
  },
  {
    id: 'dyad-sessions',
    name: 'Dyad Sessions (Buddy Learning)',
    subtitle: 'Learning Together, Growing Together',
    description: 'Pair two children to work on peer interaction, cooperative play, and social skills in a structured environment.',
    features: [
      'Turn-taking and sharing practice',
      'Joint attention development',
      'Early friendship skills',
      'Communication in social settings'
    ],
    category: 'Small Group'
  },
  {
    id: 'social-skills',
    name: 'Social Skills Groups',
    subtitle: 'Confidence Through Connection and Play',
    description: 'Small groups of 3–5 children focusing on conversation, teamwork, and emotional regulation.',
    features: [
      'Friendship building activities',
      'Conversation skills development',
      'Cooperative play training',
      'Self-regulation techniques'
    ],
    category: 'Group'
  },
  {
    id: 'aba-montessori',
    name: 'ABA + Montessori Program',
    subtitle: 'The Best of Structure and Exploration',
    description: 'Combines scientifically backed ABA strategies with Montessori\'s hands-on, child-led learning approach.',
    features: [
      'Academic skills development',
      'Independence building',
      'Problem-solving skills',
      'Full-day program (up to 7 hours)'
    ],
    category: 'Comprehensive'
  },
  {
    id: 'early-intervention',
    name: 'Early Intervention Program (EIP)',
    subtitle: 'Strong Foundations for Lifelong Learning',
    description: 'Targeted support for toddlers and preschoolers focusing on communication, social, and cognitive skills.',
    features: [
      'Communication development',
      'Social skill building',
      'Cognitive enhancement',
      'Play skill development'
    ],
    category: 'Early Years'
  },
  {
    id: 'school-readiness',
    name: 'School Readiness Program',
    subtitle: 'Confidence for a Smooth School Start',
    description: 'Prepares children for school with classroom routines, group activities, and structured learning.',
    features: [
      'Classroom routine preparation',
      'Group activity participation',
      'Social interaction in school settings',
      'Transition support'
    ],
    category: 'Transition'
  },
  {
    id: 'life-skills',
    name: 'Life Skills & Independence Program',
    subtitle: 'Building Confidence for Everyday Life',
    description: 'Teaches practical skills for personal care, meal prep, chores, and safety to promote independence.',
    features: [
      'Personal care skills',
      'Meal preparation',
      'Household chores',
      'Money management',
      'Safety awareness'
    ],
    category: 'Independence'
  },
  {
    id: 'community-outings',
    name: 'Community Outing Program',
    subtitle: 'ABA Learning Beyond the Therapy Room',
    description: 'Practice social, safety, and communication skills during real-world community outings.',
    features: [
      'Real-world skill application',
      'Community safety skills',
      'Social interaction practice',
      'Confidence building'
    ],
    category: 'Community'
  },
  {
    id: 'parent-coaching',
    name: 'Parent Coaching & Training',
    subtitle: 'Empowering Families to Support Learning',
    description: 'Workshops and coaching sessions teaching parents practical ABA strategies for home use.',
    features: [
      'Group workshops',
      'One-on-one coaching',
      'Hands-on demonstrations',
      'Real-world application support'
    ],
    category: 'Family Support'
  },
  {
    id: 'vocational',
    name: 'Vocational Skills Program',
    subtitle: 'Preparing Teens for Work and Independence',
    description: 'Teens develop job-related skills, workplace behavior, and time management in a supportive environment.',
    features: [
      'Job-related skill development',
      'Workplace behavior training',
      'Time management skills',
      'Independence preparation'
    ],
    category: 'Teen Programs'
  }
]

const categories = ['All', 'Individual', 'Group', 'Comprehensive', 'Family Support', 'Teen Programs']

export default async function ServicesPage() {
  const services = await prisma.service.findMany({
    where: { active: true },
    orderBy: { name: 'asc' }
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-amber-300">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive ABA programs designed to help children build skills, 
            develop independence, and achieve their full potential at every stage of development.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                {service.image && (
                  <div className="aspect-video relative">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    </div>
                    <span className="bg-amber-100 text-amber-300 text-xs font-medium px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <Link 
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Not Sure Which Service is Right?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team will help you choose the perfect program for your child's unique needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/booking"
              className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-amber-600 text-amber-300 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
