import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/utils/cn';

function PostPreview() {
  return (
    <AspectRatio className={cn('rounded')} ratio={10}>
      post
    </AspectRatio>
  );
}

export default PostPreview;
