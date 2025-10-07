import { cn } from '@/utils/cn';

import TimeLine from '../components/time-line';

const careers = [
	{
		dateRange: '2025.07 ~ NOW',
		department: '커머스 스쿼드',
		englishName: 'Levit (Alwayz)',
		koreanName: '레브잇 (올웨이즈)',
	},
	{
		dateRange: '2023.03 ~ 2025.07',
		department: '시스템개발본부 프론트엔드 개발팀',
		englishName: 'Ktown4u',
		koreanName: '케이타운포유',
	},
];

const activities = [
	{
		dateRange: '2024.09 ~ 2024.12',
		department: 'Technical Writer',
		englishName: '글또 10기',
		koreanName: '글 쓰는 또라이가 세상을 바꾼다',
	},
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
		<main className={cn('px-6')}>
			<section className={cn('flex flex-col items-center py-12')}>
				<h1 className={cn('mb-1 text-base sm:text-3xl')}>
					안녕하세요!{' '}
					<span className={cn('font-bold')}>Software Engineer 신원세</span>
					입니다.
				</h1>
				<p className={cn('text-sm sm:text-base')}>
				</p>
			</section>
			<section className={cn('flex flex-col gap-12')}>
				<TimeLine className={cn('mt-4')} data={careers} title="Careers" />
				<TimeLine className={cn('mt-4')} data={activities} title="Activities" />
				<TimeLine className={cn('mt-4')} data={educations} title="Education" />
			</section>
		</main>
	);
}

export default AboutPage;
