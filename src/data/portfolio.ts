export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
  links?: { label: string; url: string }[];
}

export interface Project {
  title: string;
  period: string;
  organization?: string;
  description: string[];
  technologies: string[];
  link?: string;
}

export interface Social {
  name: string;
  url: string;
  iconName: 'github' | 'linkedin' | 'mail' | 'instagram' | 'naver-blog';
}

export interface NavItem {
  id: string;
  label: string;
  isPage?: boolean;
}

export interface Writing {
  title: string;
  description: string;
  year: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  email: string;
  location: string;
  avatar?: string;
  about: string;
}

export const PROFILE: Profile = {
  name: '신원세 (Wonse Shin)',
  title: 'Product Engineer',
  tagline: '사용자에게 가치를, 동료에게 영감을 주는 엔지니어',
  email: 'sinwonse@gmail.com',
  location: 'Seoul, Korea',
  avatar: '/profile.png',
  about: `안녕하세요. 좋은 코드란 비즈니스의 문제를 해결하고 수익을 창출하는 코드라고 생각하는 소프트웨어 엔지니어 신원세입니다. K-POP 기반 이커머스 플랫폼을 시작으로 커리어를 시작하여 현재는 레브잇에서 '모두가 매일 사용하는 초저가 커머스 플랫폼'을 만들고 있습니다.

단순히 기능 구현에 그치지 않고, 복잡한 문제를 직관적인 UI/UX로 풀어내는 과정에서 즐거움을 느낍니다.`,
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'writing', label: 'Writing & Activity' },
  { id: 'blog', label: 'Blog', isPage: true },
];

export const SOCIALS: Social[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/shinwonse',
    iconName: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/wonse',
    iconName: 'linkedin',
  },
  {
    name: 'Email',
    url: `mailto:${PROFILE.email}`,
    iconName: 'mail',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/__wonse',
    iconName: 'instagram',
  },
  {
    name: 'Naver Blog',
    url: 'https://blog.naver.com/wonse-',
    iconName: 'naver-blog',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: '주식회사 레브잇 (Levit)',
    role: 'Product Engineer',
    period: '2025. 07 — Present',
    description:
      "MAU 300만의 '모두가 매일 사용하는 초저가 커머스 플랫폼' 올웨이즈의 커머스 전면을 개발하고 있습니다. 유저가 올웨이즈에서 기분 좋은 경험을 할 수 있도록 매일 고군분투하고 있습니다.",
    skills: ['React', 'TypeScript', 'GraphQL', 'Relay'],
    links: [{ label: '올웨이즈 (Alwayz)', url: 'https://alwayz.co/' }],
  },
  {
    company: '주식회사 케이타운포유 (Ktown4u)',
    role: 'Frontend Engineer',
    period: '2023. 03 — 2025. 07',
    description:
      '글로벌 팬을 대상으로 하는 MAU 400만의 K-Pop 역직구 이커머스 플랫폼에서 K-Culture를 전세계로 전파하였습니다.',
    skills: ['React', 'TypeScript', 'Next.js', 'GraphQL'],
    links: [
      { label: 'K-Pop 역직구 이커머스 플랫폼 (Ktown4u)', url: 'https://www.ktown4u.com/' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: '장바구니 서비스 신규 구축',
    period: '2025. 11 — 2025. 12',
    organization: '레브잇',
    description: [
      '기존 단건 구매(Single-item purchase) 프로세스로 인해 ARPPU 및 객단가(AOV) 상승에 구조적 한계가 있는 문제 해결.',
      '장바구니 도입으로 주력 구매 구간(3~4만 원) 비중을 22%까지 확대하고, 전체 구매의 65%를 1.5만 원 이상 구간으로 안착시키며 객단가(AOV) 및 ARPPU 구조적 개선 달성.',
      'Fragment Colocation을 적용하여 각 컴포넌트 파일 내에 필요한 데이터를 직접 선언하도록 구조화. 하위 컴포넌트의 데이터 요구사항 변경이 상위 부모 코드에 영향을 주지 않는 격리된 구조를 완성하여 유지보수 생산성 증대.',
    ],
    technologies: ['React', 'TypeScript', 'GraphQL', 'Relay'],
  },
  {
    title: '딜 구조 V2 마이그레이션',
    period: '2025. 07 — 2025. 12',
    organization: '레브잇',
    description: [
      '딜 오픈 프로세스가 경직된 레거시 구조로 되어 있어, 신규 딜 생성에 1달 이상 소요되는 운영 비효율 해결.',
      '딜 구조 개편을 통해 딜 오픈 소요 시간을 2~3일로 약 90% 단축하여 운영 효율성 및 기획전 대응 속도 극대화.',
      '다양한 딜 타입을 하나의 인터페이스로 처리할 수 있도록 Compound Component 패턴 도입. 공통 UI(가격, 썸네일)와 가변 UI(타이머, 배지)를 조립 가능한 형태로 모듈화.',
    ],
    technologies: ['React', 'TypeScript', 'GraphQL', 'Relay'],
  },
  {
    title: 'O2O 현장 수령 시스템 및 바코드 검증 기능 구축',
    period: '2024. 12 — 2025. 01',
    organization: '케이타운포유',
    description: [
      '기존 수기 명부 확인 방식의 비효율로 인해 오프라인 행사 시 대기 줄이 길어지고, 네트워크 불안정으로 인해 데이터 조회가 지연되는 문제 해결.',
      '바코드 스캔 시스템 도입으로 1인당 수령 시간을 10초 이내로 단축하고, 네트워크 지연 상황에서도 안정적인 바코드 노출을 보장하여 대규모 행사 기간 동안 현장 운영 이슈 제로(0건) 달성.',
      'React Query의 Caching 옵션을 전략적으로 설정해 네트워크 연결이 끊기거나 지연되어도 바코드 및 주문 정보가 즉시 로딩되도록 구현.',
    ],
    technologies: ['React', 'TypeScript', 'React Query'],
  },
  {
    title: '상품 관리 구조 개선',
    period: '2024. 08 — 2025. 06',
    organization: '케이타운포유',
    description: [
      '노후화된 C# 기반 레거시 툴로 인해 신규 비즈니스 요구사항(세금, 배송비 등) 대응이 지연되고, 복잡한 입력 폼 구조로 인해 운영진의 휴먼 에러가 빈번하게 발생하는 문제 해결.',
      '어드민 시스템 전면 개편을 통해 신규 비즈니스 로직 수용 능력을 확보하고, 유효성 검사 강화 및 직관적인 UI 개선으로 운영 실수를 사전에 차단하여 업무 효율성 및 데이터 무결성 증대.',
      'C#에서 React/GraphQL로의 기술 스택 전환을 주도하고, Formik/MUI를 도입하여 복잡한 대규모 폼 상태 관리를 최적화. graphql-codegen을 활용하여 API 변경에 유연하게 대응할 수 있는 타입 안전(Type-safe) 환경 구축.',
    ],
    technologies: ['React', 'TypeScript', 'GraphQL', 'Formik', 'MUI'],
  },
  {
    title: '사회인야구단 Numugas 홈페이지',
    period: '상시 개발 중',
    organization: '개인',
    description: [
      '시장 점유율 1위 플랫폼의 데이터 제공 한계(통산 성적 및 세부 기록 부재)를 해결하고, 프로 구단 수준의 상세 기록실을 구축하여 팀 브랜딩 및 선수들의 소속감 고취.',
      '기존 플랫폼을 뛰어넘는 기획력과 완성도를 인정받아 MBC 스포츠 라디오 섭외 및 출연.',
      '선수별 통산 성적, 커리어 하이 등 고도화된 데이터 시각화를 제공하여 팀원들의 시즌 참여 동기 부여(Engagement) 및 서비스 체류 시간 극대화.',
      'Claude Code와 AI Studio를 적극 활용하여 기획·디자인·개발 전 과정을 주도, 통상적인 개발 소요 시간 대비 생산성을 극대화하여 1인 개발의 리소스 한계 극복.',
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Supabase'],
    link: 'https://numugas.com',
  },
  {
    title: '개인 기술 블로그',
    period: '상시 개발 중',
    organization: '개인',
    description: [
      'Astro와 MDX Content Collections를 활용하여 로컬 MDX 파일 기반의 정적 블로그 구축.',
      'Islands Architecture로 필요한 곳에만 React를 hydration하여 제로 JS 기본 원칙을 유지하고, Tailwind CSS v4와 커스텀 rehype 플러그인으로 한국어 친화적인 콘텐츠 파이프라인 구성.',
    ],
    technologies: ['Astro', 'React', 'TypeScript', 'MDX', 'Tailwind CSS'],
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
