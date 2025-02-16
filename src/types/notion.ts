export interface Category {
	id: string;
	type: string;
	multiSelect: {
		id: string;
		name: string;
		color: string;
	}[];
}

export interface Slug {
	id: string;
	type: string;
	richText: {
		plainText: string;
	}[];
}

export interface Description {
	id: string;
	type: string;
	richText: {
		plainText: string;
	}[];
}

export interface Title {
	id: string;
	type: string;
	title: {
		plainText: string;
	}[];
}

export interface Post {
	object: string;
	createdBy: { object: string; id: string };
	createdTime: string;
	id: string;
	lastEditedBy: { object: string; id: string };
	lastEditedTime: string;
	properties: {
		category: Category;
		slug: Slug;
		title: Title;
		description: Description;
	};
	url: string;
}

export interface TOCItem {
	id: string;
	tagName: string;
	text: string;
}
