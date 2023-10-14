import Card from '@/app/components/Card';
import Section from '@/app/components/Section';
import { cn } from '@/utils/cn';

async function BookSection() {
  return (
    <Section className={cn('w-full')} layout="grid" title="개발 서적 읽기">
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

export default BookSection;
