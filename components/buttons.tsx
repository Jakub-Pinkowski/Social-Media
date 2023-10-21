'use-client'

import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

export function SignInButton() {
    const { data: session, status } = useSession()
    console.log('session', session)
    console.log('status', status)

    const signinHandler = () => {
        signIn()
    }

    if (status === 'loading') {
        return <> ... </>
    }

    if (status === 'authenticated') {
        return (
            <>
                <Link href={`/dashboard`}>
                    <a>
                        <Image
                            src={session?.user.image ?? 'mememan.webp'}
                            alt={session?.user?.name as string}
                            width={32}
                            height={32}
                        />
                    </a>
                </Link>
            </>
        )
    }

    return <button onClick={signinHandler}>Sign In</button>
}

export function SignOutButton() {
    const signoutHandler = () => {
        signOut()
    }

    return <button onClick={signoutHandler}>Sign Out</button>
}
