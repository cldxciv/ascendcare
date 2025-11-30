import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const { available } = await request.json()

    const slot = await prisma.timeSlot.update({
      where: { id },
      data: { available }
    })

    return NextResponse.json(slot)
  } catch (error) {
    console.error('Failed to update slot:', error)
    return NextResponse.json(
      { error: 'Failed to update slot' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    await prisma.timeSlot.delete({
      where: { id }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to delete slot:', error)
    return NextResponse.json(
      { error: 'Failed to delete slot' },
      { status: 500 }
    )
  }
}
