'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

export function SignInButton() {
    const { data: session, status } = useSession()

    if (status === 'loading') {
        return <>..</>
    }

    if (status === 'authenticated') {
        return (
            <Link href={`/dashboard`}>
                <img
                    src={session.user?.image ?? 'https://picsum.photos/200'}
                    width={32}
                    height={32}
                    alt="Your Name"
                />
            </Link>
        )
    }

    return <button onClick={() => signIn()}>Sign in</button>
}

export function SignOutButton() {
    return <button onClick={() => signOut()}>Sign out</button>
}
