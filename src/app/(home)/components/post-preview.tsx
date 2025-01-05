import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/utils/cn';

type Props = {
  author: string;
  coverImage?: string;
  title: string;
};

function PostPreview({ author, coverImage, title }: Props) {
  return (
    <div className={cn('flex h-16 flex-row items-center gap-4 rounded')}>
      <Avatar className={cn('size-16 bg-white')}>
        <AvatarImage alt="Random image" src={coverImage} />
        <AvatarFallback>👋</AvatarFallback>
      </Avatar>
      <div>
        <h3>{title}</h3>
        <span className={cn('text-xs text-gray-400')}>{author}</span>
      </div>
    </div>
  );
}

export default PostPreview;
