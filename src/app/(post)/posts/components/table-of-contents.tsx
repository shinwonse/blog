'use client';

import type { MouseEvent } from 'react';

import type { TOCItem } from '@/types/notion';
import { cn } from '@/utils/cn';

type Props = {
  toc: TOCItem[];
};

const TableOfContents = ({ toc }: Props) => {
  if (toc.length === 0) {
    return null;
  }

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={cn('border-l-2 border-stone-600 pl-4 text-sm text-stone-400')}
    >
      <ul>
        {toc.map(({ id, tagName, text }) => (
          <li
            key={text + id}
            className={cn(
              'w-full py-1',
              tagName === 'h2' && 'pl-4',
              tagName === 'h3' && 'pl-8',
            )}
          >
            <a
              className={cn(
                'block truncate transition-colors hover:text-stone-200',
              )}
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
