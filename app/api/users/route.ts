import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const users = await prisma.user.findMany()

    console.log

    return NextResponse.json(users)
}