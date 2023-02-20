import { projectNarratives, type ProjectKeys } from "$lib/data/projects";
import { error } from "@sveltejs/kit";
import type { PageLoadEvent } from "./$types";

export const prerender = true;

export function load({ params }: PageLoadEvent) {
	const project = projectNarratives[params.slug as ProjectKeys];

	if(!project) throw error(404, { message: "No Project Found" });

	return project
}