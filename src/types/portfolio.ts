import type { ReactNode } from 'react';

export interface Experience {
	company: string;
	role: string;
	period: string;
	description: string;
	skills: string[];
	links?: { label: string; url: string }[];
}

export interface Project {
	title: string;
	period: string;
	organization?: string;
	description: string[];
	technologies: string[];
	link?: string;
}

export interface Social {
	name: string;
	url: string;
	icon?: ReactNode;
}

export interface NavItem {
	id: string;
	label: string;
	isPage?: boolean;
}

export interface Writing {
	title: string;
	description: string;
	year: string;
}

export interface Profile {
	name: string;
	title: string;
	tagline: string;
	email: string;
	location: string;
	avatar?: string;
	about: string;
	aboutExtra?: ReactNode;
}

