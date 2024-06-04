import PostPreview from '@/app/components/PostPreview';
import { getBooks } from '@/services/book';
import { cn } from '@/utils/cn';

async function BookSection() {
  const books = await Promise.resolve(getBooks());

  return (
    <section className={cn('size-full px-6')}>
      <h2 className={cn('mb-4 w-full font-bold')}>개발 서적 읽기</h2>
      <div className={cn('grid h-full grid-cols-1 gap-10 sm:gap-3')}>
        {books.map((book) => (
          <PostPreview
            key={book.title}
            author={book.author}
            coverImage={book.cover}
            title={book.title}
          />
        ))}
      </div>
    </section>
  );
}

export default BookSection;
