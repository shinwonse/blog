import { cn } from '@/utils/cn';

type TOCItem = {
  id: string;
  tagName: string;
  text: string;
};

type Props = {
  toc: TOCItem[];
};

const TableOfContents = ({ toc }: Props) => {
  if (toc.length === 0) {
    return null;
  }

  return (
    <div className={cn('border-l-2 border-stone-600 pl-4 text-sm text-stone-400')}>
      <ul>
        {toc.map(({ id, tagName, text }) => (
          <li key={id} className={cn('w-full py-1')}>
            <a className={cn('block truncate')} href={`#${id}`}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
