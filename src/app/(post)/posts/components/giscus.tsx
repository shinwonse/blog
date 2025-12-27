'use client';

import { useEffect, useRef } from 'react';

import { cn } from '@/utils/cn';

const Giscus = () => {
	const ref = useRef<HTMLDivElement>(null);

	// Always use dark theme since our site is dark-only now
	const theme = 'dark';

	useEffect(() => {
		if (!ref.current || ref.current.hasChildNodes()) return;

		const scriptElem = document.createElement('script');
		scriptElem.src = 'https://giscus.app/client.js';
		scriptElem.async = true;
		scriptElem.crossOrigin = 'anonymous';

		scriptElem.setAttribute('data-repo', 'shinwonse/blog');
		scriptElem.setAttribute('data-repo-id', 'R_kgDOKRZdKg');
		scriptElem.setAttribute('data-category', 'Comments');
		scriptElem.setAttribute('data-category-id', 'DIC_kwDOKRZdKs4Clwh7');
		scriptElem.setAttribute('data-mapping', 'pathname');
		scriptElem.setAttribute('data-strict', '0');
		scriptElem.setAttribute('data-reactions-enabled', '1');
		scriptElem.setAttribute('data-emit-metadata', '0');
		scriptElem.setAttribute('data-input-position', 'bottom');
		scriptElem.setAttribute('data-theme', theme);
		scriptElem.setAttribute('data-lang', 'ko');

		ref.current.appendChild(scriptElem);
	}, []);

	return (
		<section
			ref={ref}
			className={cn('mt-16 border-t border-stone-700/50 pt-8')}
		/>
	);
};

export default Giscus;
