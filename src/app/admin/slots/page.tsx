'use client'

import { useState, useEffect } from 'react'
import { Calendar, Clock, Plus, X, Check } from 'lucide-react'

interface TimeSlot {
  id: string
  date: string
  time: string
  available: boolean
  serviceId?: string
}

export default function SlotsPage() {
  const [slots, setSlots] = useState<TimeSlot[]>([])
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const [showAddModal, setShowAddModal] = useState(false)
  const [newSlot, setNewSlot] = useState({ date: '', time: '' })
  const [selectedSlot, setSelectedSlot] = useState<{ time: string; slot?: TimeSlot } | null>(null)

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ]

  useEffect(() => {
    fetchSlots()
  }, [selectedDate])

  const fetchSlots = async () => {
    try {
      const response = await fetch(`/api/admin/slots?date=${selectedDate}`)
      const data = await response.json()
      setSlots(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Failed to fetch slots:', error)
      setSlots([])
    }
  }

  const toggleSlotAvailability = async (id: string, available: boolean) => {
    try {
      await fetch(`/api/admin/slots/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ available })
      })
      fetchSlots()
      setSelectedSlot(null)
    } catch (error) {
      console.error('Failed to update slot:', error)
    }
  }

  const deleteSlot = async (id: string) => {
    try {
      await fetch(`/api/admin/slots/${id}`, { method: 'DELETE' })
      fetchSlots()
      setSelectedSlot(null)
    } catch (error) {
      console.error('Failed to delete slot:', error)
    }
  }

  const createSlot = async (time: string) => {
    try {
      await fetch('/api/admin/slots', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date: selectedDate, time })
      })
      fetchSlots()
      setSelectedSlot(null)
    } catch (error) {
      console.error('Failed to create slot:', error)
    }
  }

  const addSlot = async () => {
    try {
      await fetch('/api/admin/slots', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSlot)
      })
      setShowAddModal(false)
      setNewSlot({ date: '', time: '' })
      fetchSlots()
    } catch (error) {
      console.error('Failed to add slot:', error)
    }
  }

  const generateWeekSlots = async () => {
    const startDate = new Date(selectedDate)
    const slots = []
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate)
      date.setDate(startDate.getDate() + i)
      const dateStr = date.toISOString().split('T')[0]
      
      timeSlots.forEach(time => {
        slots.push({ date: dateStr, time, available: true })
      })
    }

    try {
      await fetch('/api/admin/slots/bulk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slots })
      })
      fetchSlots()
    } catch (error) {
      console.error('Failed to generate slots:', error)
    }
  }

  const getSlotForTime = (time: string) => {
    return Array.isArray(slots) ? slots.find(slot => slot.time === time && slot.date === selectedDate) : undefined
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Time Slots Management</h1>
        <div className="flex gap-2">
          <button
            onClick={generateWeekSlots}
            className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            Generate Week
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Slot
          </button>
        </div>
      </div>

      {/* Date Selector */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <div className="flex items-center gap-4">
          <Calendar className="w-5 h-5 text-gray-600" />
          <label className="font-medium">Select Date:</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-3 py-2 border rounded-lg"
          />
        </div>
      </div>

      {/* Time Slots Grid */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold">
            Slots for {new Date(selectedDate).toLocaleDateString()}
          </h2>
        </div>
        
        <div className="p-6">
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {timeSlots.map(time => {
              const slot = getSlotForTime(time)
              return (
                <div
                  key={time}
                  onClick={() => setSelectedSlot({ time, slot })}
                  className={`p-4 rounded-lg border-2 transition-colors cursor-pointer hover:shadow-md ${
                    slot?.available 
                      ? 'border-green-200 bg-green-50 hover:border-green-300' 
                      : slot 
                        ? 'border-red-200 bg-red-50 hover:border-red-300' 
                        : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="font-medium">{time}</span>
                    </div>
                    {slot && (
                      slot.available ? <Check className="w-4 h-4 text-green-600" /> : <X className="w-4 h-4 text-red-600" />
                    )}
                  </div>
                  <div className="mt-2 text-sm">
                    {slot ? (
                      <span className={slot.available ? 'text-green-700' : 'text-red-700'}>
                        {slot.available ? 'Available' : 'Booked'}
                      </span>
                    ) : (
                      <span className="text-gray-500">Not Set</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Add Slot Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Add Time Slot</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Date</label>
                <input
                  type="date"
                  value={newSlot.date}
                  onChange={(e) => setNewSlot({ ...newSlot, date: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Time</label>
                <select
                  value={newSlot.time}
                  onChange={(e) => setNewSlot({ ...newSlot, time: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                >
                  <option value="">Select time</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex gap-2 pt-4">
                <button
                  onClick={addSlot}
                  className="flex-1 bg-amber-600 text-white py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors"
                >
                  Add Slot
                </button>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Slot Management Modal */}
      {selectedSlot && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Manage Time Slot</h3>
              <button
                onClick={() => setSelectedSlot(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center gap-3 text-lg">
                <Clock className="w-5 h-5 text-gray-600" />
                <span className="font-semibold">{selectedSlot.time}</span>
              </div>
              <div className="text-sm text-gray-600 mt-1">
                {new Date(selectedDate).toLocaleDateString()}
              </div>
              {selectedSlot.slot && (
                <div className={`mt-3 inline-block px-3 py-1 rounded-full text-sm ${
                  selectedSlot.slot.available 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {selectedSlot.slot.available ? 'Available' : 'Booked'}
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              {selectedSlot.slot ? (
                <>
                  <button
                    onClick={() => toggleSlotAvailability(selectedSlot.slot!.id, !selectedSlot.slot!.available)}
                    className={`w-full py-3 rounded-lg font-medium transition-colors ${
                      selectedSlot.slot.available
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    {selectedSlot.slot.available ? 'Mark as Unavailable' : 'Mark as Available'}
                  </button>
                  <button
                    onClick={() => deleteSlot(selectedSlot.slot!.id)}
                    className="w-full py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
                  >
                    Delete Slot
                  </button>
                </>
              ) : (
                <button
                  onClick={() => createSlot(selectedSlot.time)}
                  className="w-full py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors"
                >
                  Create Slot
                </button>
              )}
              <button
                onClick={() => setSelectedSlot(null)}
                className="w-full py-3 bg-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
