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
		<main className={cn('flex w-full flex-col items-center py-12')}>
			<section
				className={cn(
					'mb-16 flex w-full max-w-3xl flex-col items-center gap-4 text-center',
				)}
			>
				<h1
					className={cn(
						'text-3xl font-bold tracking-tight sm:text-5xl',
						'bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent',
					)}
				>
					안녕하세요!
				</h1>
				<p className={cn('text-xl text-muted-foreground sm:text-2xl')}>
					<span className={cn('font-semibold text-foreground')}>
						Software Engineer 신원세
					</span>
					입니다
				</p>
			</section>
			<section className={cn('flex w-full max-w-4xl flex-col gap-16')}>
				<TimeLine data={careers} title="Careers" />
				<TimeLine data={activities} title="Activities" />
				<TimeLine data={educations} title="Education" />
			</section>
		</main>
	);
}

export default AboutPage;
