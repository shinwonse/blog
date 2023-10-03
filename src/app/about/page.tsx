import clsx from 'clsx';

import TimeLine from '@/app/components/TimeLine';

const careers = [
  {
    dateRange: '2023.03 ~ NOW',
    department: '시스템개발본부 프론트엔드 개발팀',
    description: '카카오엔터프라이즈에서 프론트엔드 개발자로 일하고 있습니다.',
    englishName: 'ktown4u',
    koreanName: '케이타운포유',
  },
];

const activities = [
  {
    dateRange: '2021.08 ~ 2022.08',
    department: 'Frontend Developer',
    description: '프론트엔드 개발자로 활동하였습니다.',
    englishName: 'WIT',
    koreanName: '연합 개발 동아리',
  },
];

function AboutPage() {
  return (
    <main>
      <h1>안녕하세요! 개발자 신원세입니다.</h1>
      <p>지금은 ktown4u에서 글로벌 팬과 K-Pop을 연결하는 일을 하고 있습니다.</p>
      <div className={clsx('flex flex-col', 'gap-12')}>
        <TimeLine className={clsx('mt-4')} data={careers} title="Careers" />
        <TimeLine
          className={clsx('mt-4')}
          data={activities}
          title="Activities"
        />
      </div>
    </main>
  );
}

export default AboutPage;
