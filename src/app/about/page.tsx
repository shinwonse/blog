import clsx from 'clsx';

import TimeLine from '@/app/components/TimeLine';

const careers = [
  {
    dateRange: '2023.03 ~ NOW',
    department: '시스템개발본부 프론트엔드 개발팀',
    englishName: 'ktown4u',
    koreanName: '케이타운포유',
  },
];

const activities = [
  {
    dateRange: '2022.12 ~ 2023.02',
    department: 'Frontend Developer',
    englishName: 'Wanted FE PO Internship',
    koreanName: '원티드 프리온보딩 인턴십',
  },
  {
    dateRange: '2021.08 ~ 2022.08',
    department: 'Frontend Developer',
    englishName: 'WIT',
    koreanName: '연합 개발 동아리',
  },
];

const educations = [
  {
    dateRange: '2017.03 ~ 2023.08',
    department: '컴퓨터공학부',
    englishName: 'Konkuk Univ',
    koreanName: '건국대학교',
  },
  {
    dateRange: '2012.03 ~ 2015.02',
    department: '자율형사립고',
    englishName: 'Shinil High School',
    koreanName: '신일고등학교',
  },
];

function AboutPage() {
  return (
    <main>
      <section className={clsx('flex flex-col items-center', 'py-12')}>
        <h1 className={clsx('text-base sm:text-3xl', 'mb-1')}>
          안녕하세요! 개발자 신원세입니다.
        </h1>
        <p className={clsx('text-sm sm:text-base')}>
          현재 ktown4u에서 글로벌 팬과 K-POP을 연결하고 있습니다.
        </p>
      </section>
      <section className={clsx('flex flex-col', 'gap-12')}>
        <TimeLine className={clsx('mt-4')} data={careers} title="Careers" />
        <TimeLine
          className={clsx('mt-4')}
          data={activities}
          title="Activities"
        />
        <TimeLine
          className={clsx('mt-4')}
          data={educations}
          title="Education"
        />
      </section>
    </main>
  );
}

export default AboutPage;
