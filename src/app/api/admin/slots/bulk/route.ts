import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { slots } = await request.json()

    const createdSlots = await Promise.all(
      slots.map(async (slot: any) => {
        // Check if slot already exists
        const existing = await prisma.timeSlot.findFirst({
          where: {
            date: new Date(slot.date),
            time: slot.time
          }
        })

        if (!existing) {
          return prisma.timeSlot.create({
            data: {
              date: new Date(slot.date),
              time: slot.time,
              available: slot.available
            }
          })
        }
        return existing
      })
    )

    return NextResponse.json(createdSlots)
  } catch (error) {
    console.error('Failed to create bulk slots:', error)
    return NextResponse.json(
      { error: 'Failed to create bulk slots' },
      { status: 500 }
    )
  }
}
