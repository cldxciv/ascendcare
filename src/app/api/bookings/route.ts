import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const bookingSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  service: z.string().min(1),
  date: z.string(),
  time: z.string(),
  notes: z.string().optional()
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = bookingSchema.parse(body)

    // Find or create a service based on the service name
    let service = await prisma.service.findFirst({
      where: { name: validatedData.service }
    })

    // If service doesn't exist, create it
    if (!service) {
      service = await prisma.service.create({
        data: {
          name: validatedData.service,
          description: validatedData.service,
          duration: 60,
          category: 'General',
          active: true
        }
      })
    }

    const booking = await prisma.booking.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        serviceId: service.id,
        date: new Date(`${validatedData.date}T${convertTo24Hour(validatedData.time)}`),
        time: validatedData.time,
        notes: validatedData.notes || null,
        status: 'PENDING'
      }
    })

    // Find existing slot or create new one
    const existingSlot = await prisma.timeSlot.findFirst({
      where: {
        date: new Date(validatedData.date),
        time: validatedData.time
      }
    })

    if (existingSlot) {
      await prisma.timeSlot.update({
        where: { id: existingSlot.id },
        data: { available: false }
      })
    } else {
      await prisma.timeSlot.create({
        data: {
          date: new Date(validatedData.date),
          time: validatedData.time,
          available: false,
          serviceId: service.id
        }
      })
    }

    return NextResponse.json({ success: true, booking })
  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    )
  }
}

function convertTo24Hour(time12h: string): string {
  const [time, modifier] = time12h.split(' ')
  let [hours, minutes] = time.split(':')
  
  if (hours === '12') {
    hours = '00'
  }
  
  if (modifier === 'PM') {
    hours = (parseInt(hours, 10) + 12).toString()
  }
  
  return `${hours}:${minutes}:00`
}
