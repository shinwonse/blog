import { cn } from '@/utils/cn';

function Footer() {
  return (
    <footer className={cn('flex w-full flex-col items-center py-8')}>
      <span
        className={cn(
          'text-xs font-light text-neutral-800 dark:text-neutral-300'
        )}
      >
        © Published by Wonse
      </span>
    </footer>
  );
}

export default Footer;
