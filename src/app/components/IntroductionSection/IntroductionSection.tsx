import Image from 'next/image';

import Section from '@/app/components/Section';
import { cn } from '@/utils/cn';

function IntroductionSection() {
  return (
    <Section className={cn('w-full p-6 content-visibility-auto')} layout="flex">
      <div className={cn('order-1 mt-2 sm:-order-1 sm:mt-0')}>
        <h2 className={cn('mb-2 text-3xl font-bold')}>신원세입니다</h2>
        <p>평생 재미있게 개발하고 싶습니다</p>
      </div>
      <Image
        alt="profile"
        className={cn('rounded-full')}
        height={192}
        src="/profile.png"
        unoptimized
        width={192}
      />
    </Section>
  );
}

export default IntroductionSection;
