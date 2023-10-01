import clsx from 'clsx';
import Image from 'next/image';

import Section from '@/app/components/Section';

function IntroductionSection() {
  return (
    <Section className={clsx('w-full')} layout="flex">
      <div>
        <h2 className={clsx('text-3xl font-bold')}>신원세입니다</h2>
        <p className={clsx('mt-2')}>평생 재미있게 개발하고 싶습니다</p>
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
