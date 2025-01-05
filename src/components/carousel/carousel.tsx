import {
  Carousel as ShadcnCarousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/utils/cn';

type CarouselProps<T> = {
  className?: string;
  items?: T[];
  getKey: (item: T) => string | number;
  renderItem: (item: T) => React.ReactNode;
};

const Carousel = <T,>({ className, items, getKey, renderItem }: CarouselProps<T>) => {
  return (
    <ShadcnCarousel className={cn(className)}>
      <CarouselContent className={cn('-ml-4')}>
        {items?.map((item) => (
          <CarouselItem key={getKey(item)} className={cn('basis-3/5 pl-4 sm:basis-1/3')}>
            {renderItem(item)}
          </CarouselItem>
        ))}
      </CarouselContent>
    </ShadcnCarousel>
  );
};

export default Carousel;
