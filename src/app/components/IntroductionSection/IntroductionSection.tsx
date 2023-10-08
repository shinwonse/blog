import clsx from 'clsx';
import Image from 'next/image';

import Section from '@/app/components/Section';

function IntroductionSection() {
  return (
    <Section className={clsx('w-full')} layout="flex">
      <div className={clsx('order-1 mt-2 sm:-order-1 sm:mt-0')}>
        <h2 className={clsx('text-3xl font-bold', 'mb-2')}>신원세입니다</h2>
        <p>평생 재미있게 개발하고 싶습니다</p>
      </div>
      <Image
        alt="profile"
        className={clsx('rounded-full')}
        height={192}
        src="/profile.png"
        unoptimized
        width={192}
      />
    </Section>
  );
}

export default IntroductionSection;
