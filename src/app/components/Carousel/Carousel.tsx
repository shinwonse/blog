import {
  Carousel as ShadcnCarousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/utils/cn';

type Props = {
  className?: string;
  items?: any[];
};

function Carousel({ className, items }: Props) {
  return (
    <ShadcnCarousel className={cn(className)}>
      <CarouselContent className={cn('-ml-4')}>
        {items?.map((item) => (
          <CarouselItem
            key={item}
            className={cn('basis-3/5 pl-4 sm:basis-1/3')}
          >
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>
    </ShadcnCarousel>
  );
}

export default Carousel;
