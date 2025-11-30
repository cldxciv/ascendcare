import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-300 via-amber-700 to-amber-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <Image
              src="/aceinterventions-logo.webp"
              alt="AscendCare Logo"
              width={220}
              height={73}
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4">
              Evidence-Based, Heart-Led ABA therapy services helping children 
              build skills, develop independence, and achieve their full potential.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span className="text-gray-300">+1(905)536-6313</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <span className="text-gray-300">info@aceinterventions.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span className="text-gray-300">Ontario, Canada</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/ascendcare" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/ascendcare-early-interventions-inc-941ba6385" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/share/17ZvtszNkz/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/booking" className="text-gray-300 hover:text-white transition-colors">Book Now</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/1-1-aba-therapy" className="text-gray-300 hover:text-white transition-colors">1:1 ABA Therapy</Link></li>
              <li><Link href="/services/social-skills-groups" className="text-gray-300 hover:text-white transition-colors">Social Skills Groups</Link></li>
              <li><Link href="/services/early-intervention" className="text-gray-300 hover:text-white transition-colors">Early Intervention</Link></li>
              <li><Link href="/services/school-readiness" className="text-gray-300 hover:text-white transition-colors">School Readiness</Link></li>
              <li><Link href="/services/life-skills" className="text-gray-300 hover:text-white transition-colors">Life Skills Training</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 AscendCare & Early Intervention. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
