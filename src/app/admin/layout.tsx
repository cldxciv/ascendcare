import { Settings, Calendar, FileText, Users, Clock, BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: Settings },
    { name: 'Bookings', href: '/admin/bookings', icon: Calendar },
    { name: 'Blog', href: '/admin/blog', icon: BookOpen },
    { name: 'Page Editor', href: '/admin/pages', icon: FileText },
    { name: 'Services', href: '/admin/services', icon: Users },
    { name: 'Time Slots', href: '/admin/slots', icon: Clock },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900">Admin Panel</h2>
          </div>
          <nav className="mt-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {children}
        </div>
      </div>
    </div>
  )
}
