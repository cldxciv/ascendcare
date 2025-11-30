import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get('date')

    if (!date) {
      return NextResponse.json({ error: 'Date is required' }, { status: 400 })
    }

    const availableSlots = await prisma.timeSlot.findMany({
      where: {
        date: new Date(date),
        available: true
      },
      orderBy: { time: 'asc' }
    })

    return NextResponse.json(availableSlots)
  } catch (error) {
    console.error('Failed to fetch available slots:', error)
    return NextResponse.json(
      { error: 'Failed to fetch available slots' },
      { status: 500 }
    )
  }
}
