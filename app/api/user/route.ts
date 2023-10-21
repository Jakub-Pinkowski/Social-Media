import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'
import { authOptions } from '../auth/[...nextauth]/route'

export async function PUT(request: Request) {
    const session = await getServerSession(authOptions)
    const currentUserEmail = session?.user?.email!
    console.log('currentUserEmail', currentUserEmail)

    const data = await request.json()
    data.age = Number(data.age)

    const user = await prisma.user.update({
        where: { email: currentUserEmail },
        data,
    })
    console.log('user', user)

    return NextResponse.json(user)
}
