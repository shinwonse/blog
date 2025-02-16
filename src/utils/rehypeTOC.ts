import type { Element, RootContent, Text } from 'hast';

const titleTags = ['h2', 'h3', 'h4'];

function extractText(node: Element | Text): string {
	if (node.type === 'text') return node.value ?? '';
	if ('children' in node) {
		return node.children
			.map((child) => extractText(child as Element | Text))
			.join('');
	}
	return '';
}

const validateTOC = (children: RootContent[]) => {
	let currentH2: string | null = null;

	return children.map((child) => {
		if (titleTags.includes((child as Element).tagName)) {
			const title = extractText(child as Element);
			const tagName = (child as Element).tagName;

			if (tagName === 'h2') {
				currentH2 = title;
				const newId = title.toLowerCase().replace(/[^a-z0-9가-힣]/g, '-');
				(child as Element).properties = {
					...(child as Element).properties,
					id: newId,
				};
			} else if (tagName === 'h3' && currentH2) {
				const newId =
					`${currentH2.toLowerCase()}-${title.toLowerCase()}`.replace(
						/[^a-z0-9가-힣]/g,
						'-',
					);
				(child as Element).properties = {
					...(child as Element).properties,
					id: newId,
				};
			}
		}
		return child;
	});
};

const processTOC = (children: RootContent[]) =>
	children
		.filter((child) => titleTags.includes((child as Element).tagName))
		.map((child) => ({
			id: ((child as Element).properties?.id as string) ?? '',
			tagName: (child as Element).tagName,
			text: ((child as Element).children[0] as Text).value,
		}));

interface TOCItem {
	id: string;
	tagName: string;
	text: string;
}

export function rehypeTOC() {
	return (
		{ children }: { children: Element[] },
		{ data }: { data: { toc: TOCItem[] } },
	) => {
		validateTOC(children);
		data.toc = processTOC(children);
	};
}
