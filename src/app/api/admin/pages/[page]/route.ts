import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ page: string }> }
) {
  try {
    const { page } = await params

    const pageContent = await prisma.pageContent.findUnique({
      where: { page }
    })

    return NextResponse.json(pageContent || { page, content: {} })
  } catch (error) {
    console.error('Failed to fetch page content:', error)
    return NextResponse.json(
      { error: 'Failed to fetch page content' },
      { status: 500 }
    )
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ page: string }> }
) {
  try {
    const { page } = await params
    const { content } = await request.json()

    const pageContent = await prisma.pageContent.upsert({
      where: { page },
      update: { content },
      create: { page, content }
    })

    return NextResponse.json(pageContent)
  } catch (error) {
    console.error('Failed to save page content:', error)
    return NextResponse.json(
      { error: 'Failed to save page content' },
      { status: 500 }
    )
  }
}
