import { Metadata } from 'next'

import styles from './page.module.css'

export const dynamic = 'force-static'

export const metadata: Metadata = {
    title: 'About Us',
    description: 'About NextSpace',
}

export default function Blog() {
    return (
        <section className={styles.about}>
            <h1>About us</h1>
            <h2>
                Welcome to Next, the heartbeat of the digital age, where the world connects and
                converses in real-time.
            </h2>
            <p>
                We're not just a social media platform; we're the epicenter of brevity and
                immediacy, where every voice finds a place, and every story unfolds. Our journey
                began with a simple idea: to empower individuals and communities to share their
                thoughts, ideas, and moments, all within 280 characters (or less). Since our
                inception, we've evolved into a global hub of conversations, where people from all
                walks of life, cultures, and backgrounds come together to connect, engage, and
                inspire.
            </p>
            <p>
                What sets us apart? It's the power of brevity and immediacy. In a world flooded with
                information, Next champions simplicity and real-time communication. Whether you're
                sharing a breaking news update, sparking a global trend, or engaging in meaningful
                discussions, Next is the place where conversations unfold in the moment. We believe
                in the fundamental right to free expression, fostering inclusivity, and enabling
                positive change. We're not just a platform; we're a force for good, where you can
                amplify your voice, connect with friends, family, and like-minded individuals, and
                be part of a global dialogue. Join us on this journey. Share your stories, follow
                your passions, and be part of the conversation that's shaping the world, one Next at
                a time. Together, we're building a more connected and informed society.
            </p>
            <h3>Connect. Tweet. Change the world. This is Next.</h3>
        </section>
    )
}
