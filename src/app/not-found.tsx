import { cn } from '@/utils/cn';

function NotFound() {
  return (
    <main className={cn('m-auto flex min-h-[500px] flex-col justify-center')}>
      <h1 className={cn('text-3xl')}>404 Not Found</h1>
    </main>
  );
}

export default NotFound;
