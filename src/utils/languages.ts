export type Language = 'Astro'| 'JavaScript' | 'Python' | 'Social' | 'TypeScript' | 'Unknown';

type HexColour = `#${string}`
export const languageColours: Record<Language, HexColour> = {
	'Astro': '#ff5903',
	'JavaScript': '#f1e15a',
	'Python': '#3573a6',
	'Social': '#5662f6',
	'TypeScript': '#3178c6',
	'Unknown': '#a1a1aa'
}