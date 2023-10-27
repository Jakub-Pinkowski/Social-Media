import Link from 'next/link'

const serverUrl = process.env.SERVER_URL || 'http://localhost:3000'

export default async function Blog() {
    const posts = await fetch(`${serverUrl}/api/content`).then((res) => res.json())
    return (
        <div>
            <h1>Welcome to our Blog</h1>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
