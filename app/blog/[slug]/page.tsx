export const revalidate = 1200 // not necessary, just for ISR demonstration

const serverUrl = process.env.SERVER_URL || 'http://localhost:3000'
interface Post {
    title: string
    content: string
    slug: string
}

export async function generateStaticParams() {
    const posts: Post[] = await fetch(`${serverUrl}/api/content`).then((res) => res.json())

    return posts.map((post) => ({
        slug: post.slug,
    }))
}

interface Props {
    params: { slug: string }
}

export default async function BlogPostPage({ params }: Props) {
    // deduped
    const posts: Post[] = await fetch(`${serverUrl}/api/content`).then((res) => res.json())
    const post = posts.find((post) => post.slug === params.slug)!

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}
