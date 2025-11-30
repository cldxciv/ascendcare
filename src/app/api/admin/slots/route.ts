import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get('date')

    const slots = await prisma.timeSlot.findMany({
      where: date ? {
        date: new Date(date)
      } : {},
      orderBy: { time: 'asc' }
    })

    return NextResponse.json(slots)
  } catch (error) {
    console.error('Failed to fetch slots:', error)
    return NextResponse.json(
      { error: 'Failed to fetch slots' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { date, time } = await request.json()

    const slot = await prisma.timeSlot.create({
      data: {
        date: new Date(date),
        time,
        available: true
      }
    })

    return NextResponse.json(slot)
  } catch (error) {
    console.error('Failed to create slot:', error)
    return NextResponse.json(
      { error: 'Failed to create slot' },
      { status: 500 }
    )
  }
}
