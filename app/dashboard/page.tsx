import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'
import { ProfileForm } from './ProfileForm'
import { redirect } from 'next/navigation'
import { SignOutButton } from '@/components/buttons'
import { authOptions } from '../api/auth/[...nextauth]/route'

export default async function Dashboard() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/api/auth/signin')
    }

    // TODO: Fix the form submisstion, it's not working because the email does not exist in the database

    const currentUserEmail = session?.user?.email ?? ''
    const user = await prisma.user.findUnique({
        where: {
            email: currentUserEmail,
        },
    })

    return (
        <>
            <h1>Dashboard</h1>
            <SignOutButton />
            <ProfileForm user={user} />
        </>
    )
}
