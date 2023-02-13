interface InternalPost {
	metadata: { 
		title: string, 
		date: string, 
		description: string,
		hidden: boolean,
		major: boolean,
		cover: string
	}, 
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	default: any
}

type IPost = Readonly<InternalPost>

export const fetchMarkdownPosts = async () => {
	const iterablePosts = Object.entries(import.meta.glob('/src/lib/posts/*.md'))

	const posts = iterablePosts.map(async ([path, resolver]) => {
		const { metadata } = await resolver() as IPost

		return { meta: metadata, path: path.slice(15, -3)}
	})

	return (await Promise.all(posts)).filter((post) => !post.meta.hidden)
}