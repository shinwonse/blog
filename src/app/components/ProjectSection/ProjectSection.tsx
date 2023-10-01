import clsx from 'clsx';

import Card from '@/app/components/Card';
import Section from '@/app/components/Section';

function ProjectSection() {
  return (
    <Section className={clsx('w-full')} layout="grid" title="프로젝트">
      <Card
        description="안녕하세요. 프론트엔드 개발자 신원세입니다."
        title="개발자 신원세"
      />
      <Card
        description="안녕하세요. 프론트엔드 개발자 신원세입니다."
        title="개발자 신원세"
      />
      <Card
        description="안녕하세요. 프론트엔드 개발자 신원세입니다."
        title="개발자 신원세"
      />
    </Section>
  );
}

export default ProjectSection;
