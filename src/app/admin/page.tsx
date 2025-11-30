import { Calendar, Users, FileText, Clock } from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <Calendar className="w-8 h-8 text-amber-600" />
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Bookings</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <Users className="w-8 h-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm text-gray-600">Active Services</p>
              <p className="text-2xl font-bold text-gray-900">10</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <Clock className="w-8 h-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm text-gray-600">Available Slots</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <FileText className="w-8 h-8 text-orange-600" />
            <div className="ml-4">
              <p className="text-sm text-gray-600">Pages</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Bookings</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b">
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray-600">1:1 ABA Therapy</p>
              </div>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Pending</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <div>
                <p className="font-medium">Sarah Smith</p>
                <p className="text-sm text-gray-600">Social Skills Groups</p>
              </div>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Confirmed</span>
            </div>
          </div>
          <Link href="/admin/bookings" className="text-amber-600 hover:text-amber-700 text-sm mt-4 inline-block">
            View all bookings →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link href="/admin/pages" className="block p-3 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors">
              <div className="flex items-center">
                <FileText className="w-5 h-5 text-amber-600 mr-3" />
                <span className="font-medium">Edit Page Content</span>
              </div>
            </Link>
            <Link href="/admin/slots" className="block p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-green-600 mr-3" />
                <span className="font-medium">Manage Time Slots</span>
              </div>
            </Link>
            <Link href="/admin/services" className="block p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <div className="flex items-center">
                <Users className="w-5 h-5 text-purple-600 mr-3" />
                <span className="font-medium">Manage Services</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
