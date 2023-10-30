import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Home() {
    const session = await getServerSession()

    console.log('index page line 7 ' + session?.user?.email)
    if (!session) {
        redirect('/api/auth/signin')
    }

    return <h1>Main Page</h1>
}
