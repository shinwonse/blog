import type {
	Experience,
	NavItem,
	Profile,
	Project,
	Social,
	Writing,
} from '@/types/portfolio';

// Icons
export const Icons = {
	Github: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
		</svg>
	),
	Linkedin: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
			<rect x="2" y="9" width="4" height="12" />
			<circle cx="4" cy="4" r="2" />
		</svg>
	),
	Mail: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect x="2" y="4" width="20" height="16" rx="2" />
			<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
		</svg>
	),
	ArrowUpRight: () => (
		<svg
			className="ml-1 inline-block transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			width="14"
			height="14"
			aria-hidden="true"
		>
			<path
				fillRule="evenodd"
				d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
				clipRule="evenodd"
			/>
		</svg>
	),
};

export const PROFILE: Profile = {
	name: '신원세 (Wonse Shin)',
	title: 'Frontend Engineer',
	tagline: '사용자에게 가치를, 동료에게 영감을 주는 엔지니어',
	email: 'sinwonse@gmail.com',
	location: 'Seoul, Korea',
	avatar: '/profile.png',
	about: `안녕하세요. 좋은 코드란 비즈니스의 문제를 해결하고 수익을 창출하는 코드라고 생각하는 소프트웨어 엔지니어 신원세입니다. K-POP 기반 이커머스 플랫폼을 시작으로 커리어를 시작하여 현재는 레브잇에서 '모두가 매일 사용하는 초저가 커머스 플랫폼'을 만들고 있습니다.

단순히 기능 구현에 그치지 않고, 복잡한 문제를 직관적인 UI/UX로 풀어내는 과정에서 즐거움을 느낍니다. 최근에는 React Server Components와 같은 최신 기술을 프로덕션 레벨에 안정적으로 도입하는 방법론에 대해 고민하고 글을 쓰고 있습니다.`,
};

export const NAV_ITEMS: NavItem[] = [
	{ id: 'about', label: 'About' },
	{ id: 'experience', label: 'Experience' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'writing', label: 'Writing & Activity' },
	{ id: 'blog', label: 'Blog', isPage: true },
];

export const SOCIALS: Social[] = [
	{ name: 'GitHub', url: 'https://github.com/sinwonse', icon: <Icons.Github /> },
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/in/sinwonse',
		icon: <Icons.Linkedin />,
	},
	{ name: 'Email', url: `mailto:${PROFILE.email}`, icon: <Icons.Mail /> },
];

export const EXPERIENCE: Experience[] = [
	{
		company: '주식회사 레브잇 (Levit)',
		role: 'Product Engineer',
		period: '2025. 07 — Present',
		description:
			"MAU 300만의 '모두가 매일 사용하는 초저가 커머스 플랫폼' 올웨이즈의 딜과 상품을 개발하고 있습니다. MD와 셀러들이 직관적이고 편한 플로우로 업무에만 집중할 수 있는 어드민 서비스를 개발합니다.",
		skills: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Relay'],
		links: [{ label: '올웨이즈 (Alwayz)', url: 'https://alwayz.co.kr' }],
	},
	{
		company: '주식회사 케이타운포유 (Ktown4u)',
		role: 'System Development / Manager',
		period: '2023. 03 — 2025. 07',
		description:
			'글로벌 팬을 대상으로 하는 MAU 400만의 K-POP 이커머스 플랫폼에서 새로운 기능을 추가하고, 백오피스 스쿼드에서 내부 직원들의 업무 효율화를 위한 기능을 개발했습니다. 프론트엔드 개발팀의 개발 생산성을 높이기 위한 DX 개선 프로젝트에도 참여하였습니다.',
		skills: ['React', 'Next.js', 'TypeScript', 'Monorepo', 'Vitest', 'Playwright'],
	},
];

export const PROJECTS: Project[] = [
	{
		title: '딜 구조 V2 마이그레이션',
		period: '2025. 07 — 진행 중',
		organization: '레브잇',
		description: [
			'레거시 딜 구조로 인해 새로운 딜 이벤트 오픈 시 한 달 이상의 리소스가 소모되는 문제를 해결하기 위해 딜 구조를 전면 개편.',
			'GrowthBook을 이용하여 안전하게 점진적 마이그레이션을 진행.',
			'GraphQL과 Relay를 활용하여 네트워크 리소스를 최적화.',
			'결과적으로 새로운 딜 이벤트 오픈 시간을 3~4일로 획기적으로 단축.',
		],
		technologies: ['React', 'GraphQL', 'Relay', 'GrowthBook'],
	},
	{
		title: '상품 관리 구조 개선 (백오피스)',
		period: '2024. 08 — 진행 중',
		organization: '케이타운포유',
		description: [
			'기존 C# 레거시 백오피스 툴을 React와 GraphQL 기반으로 재개발하여 유지보수성 향상.',
			'Formik과 MUI를 조합하여 거대한 폼의 코드 복잡도를 줄이고, 휴먼 에러를 최소화하도록 유효성 검사 강화.',
			'graphql-codegen을 활용하여 API 스펙 변화에 유연하게 대처.',
		],
		technologies: ['React', 'GraphQL', 'Formik', 'MUI'],
	},
	{
		title: '기술 블로그 & 포트폴리오 개발',
		period: '2024. 01 — 진행 중',
		organization: '개인',
		description: [
			'Notion API와 Next.js를 사용하여 Notion에 작성한 글을 정적 사이트로 렌더링.',
			'Notion 이미지 링크 만료 이슈 해결을 위해 Supabase 스토리지 연동.',
			'SEO 최적화 및 다크모드 지원.',
		],
		technologies: ['Next.js', 'Notion API', 'Supabase', 'Tailwind CSS'],
		link: 'https://wonse.dev',
	},
];

export const WRITING: Writing[] = [
	{
		title: '글또 10기 활동',
		description:
			"'글쓰는 또라이가 세상을 바꾼다'라는 모토를 가진 개발자 글쓰기 모임. 테크니컬 라이터로 활동하며 모든 글은 개인 블로그에 기고.",
		year: '2024',
	},
];

