import BookCard from '@/app/components/BookCard';
import Section from '@/app/components/Section';
import { getBooks } from '@/services/notion';
import { cn } from '@/utils/cn';

async function BookSection() {
  const books = await Promise.resolve(getBooks());

  return (
    <Section className={cn('w-full')} layout="grid" title="개발 서적 읽기">
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
    </Section>
  );
}

export default BookSection;
