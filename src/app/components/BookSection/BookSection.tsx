import BookCard from '@/app/components/BookCard';
import { getBooks } from '@/services/book';
import { cn } from '@/utils/cn';

export const revalidate = 60;

async function BookSection() {
  const books = await Promise.resolve(getBooks());

  return (
    <section className={cn('w-full')}>
      <h2 className={cn('mb-4 w-full font-bold')}>개발 서적 읽기</h2>
      <div className={cn('grid grid-cols-2 gap-2 sm:grid-cols-3')}>
        {books.map((book) => {
          return (
            <BookCard
              key={book.cover}
              author={book.author}
              thumbnail={book.cover}
              title={book.title}
            />
          );
        })}
      </div>
    </section>
  );
}

export default BookSection;
