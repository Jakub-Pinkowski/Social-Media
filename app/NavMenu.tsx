import Link from 'next/link'
import Image from 'next/image'
import styles from './NavMenu.module.css'
import { SignInButton, SignOutButton } from '@/components/buttons'

export default function NavMenu() {
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <Image src="/next.svg" alt="Logo" width={216} height={32} />
            </Link>
            <div className={styles.sections}>
                <ul className={styles.links}>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/users">Users</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.account}>
                <ul className={styles.links}>
                    <li>
                        <SignInButton />
                    </li>
                    <li>
                        <SignOutButton />
                    </li>
                </ul>
            </div>
        </nav>
    )
}
