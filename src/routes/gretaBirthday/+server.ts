// import { error } from '@sveltejs/kit';

const pictures = [
	"https://cdn.penpow.dev/u/7889c90c-3854-406b-bacb-41ca8be027ed.png",
	"https://cdn.penpow.dev/u/1abb330c-b00f-4d27-ae5f-e34cbe9dca8b.jpg",
	"https://cdn.penpow.dev/u/f4d8e005-6001-49ea-9eeb-b5836606c576.jpg",
	"https://cdn.penpow.dev/u/5254ad32-6c2f-4dce-8ccf-93ed3a5a3704.jpg",
	"https://cdn.penpow.dev/u/b12b8fa1-ad1a-4db4-a8d1-777cb0b5cf38.jpg",
	"https://cdn.penpow.dev/u/5d6a300f-2aa3-4a6f-a7a9-f1c24d153c8a.jpg",
	"https://cdn.penpow.dev/u/41243052-9866-446b-acc3-3ea260deb739.jpg",
	"https://cdn.penpow.dev/u/14558614-463b-4fc4-b864-dde6851b467c.jpg",
	"https://cdn.penpow.dev/u/801375cc-01a6-41e9-937e-010e198bd636.png"
]

export async function GET({ setHeaders, fetch }) {
	const attachment = await (await fetch(pictures[Math.floor(Math.random() * pictures.length)])).blob()
    
	setHeaders({
		'Content-Type': attachment.type,
		'Content-Length': attachment.size.toString()
	});

	return new Response(attachment);
}