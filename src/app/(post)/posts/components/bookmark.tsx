'use client';

import Image from 'next/image';

type BookmarkProps = {
  url: string;
  title: string;
  description?: string;
  image?: string;
};

const Bookmark = ({ url, title, description, image }: BookmarkProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-lg border border-gray-200 no-underline transition-colors hover:bg-gray-50"
    >
      <div className="flex gap-4 p-4">
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-medium text-gray-900">{title}</h3>
          {description && <p className="mt-1 line-clamp-2 text-sm text-gray-500">{description}</p>}
          <p className="mt-1 truncate text-sm text-gray-500">{url}</p>
        </div>
        {image && (
          <div className="size-24 shrink-0">
            <Image src={image} alt={title} className="size-full rounded object-cover" />
          </div>
        )}
      </div>
    </a>
  );
};

export default Bookmark;
