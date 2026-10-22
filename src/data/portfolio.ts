export interface Experience {
  company: string;
  role: string;
  period: string;
  description?: string;
  skills?: string[];
  links?: { label: string; url: string }[];
}

export interface Project {
  title: string;
  period?: string;
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
  about: `안녕하세요. 좋은 코드란 비즈니스의 문제를 해결하고 수익을 창출하는 코드라고 생각하는 소프트웨어 엔지니어 신원세입니다. K-POP 기반 이커머스 플랫폼을 시작으로 커리어를 시작하여 현재는 레브잇에서 '모두가 매일 사용하는 초저가 커머스 플랫폼'을 만들고 있습니다.`,
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
      "MAU 300만의 '모두가 매일 사용하는 초저가 커머스 플랫폼' 올웨이즈 커머스 스쿼드에서 웹·앱 웹뷰·사내 어드민·판매자센터 프론트엔드를 폭넓게 담당하며, 홈부터 장바구니·주문/결제·클레임까지 구매 여정 전반의 신규 기능과 개선을 주도하고 있습니다. 명절 빅세일·브랜드위크·올프레시 등 핵심 프로모션과 신사업을 연속 출시하는 한편, 네이티브 화면의 웹뷰 전환·사내 디자인 시스템 구축·CI 도입 등 배포 속도와 코드 품질을 높이는 플랫폼 작업을 병행하고 있습니다.",
    skills: ['React', 'TypeScript', 'GraphQL', 'Relay', 'React Native'],
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
  {
    company: '건국대학교 서울캠퍼스',
    role: '컴퓨터공학부 졸업',
    period: '2017. 03 — 2023. 08',
  },
];

export const PROJECTS: Project[] = [
  {
    title: '셀러 수수료 정책 개편 & 이의제기·검수 시스템 구축',
    organization: '레브잇',
    description: [
      '카테고리별 판매 수수료율 인상 정책 시행에 필요한 셀러 이의제기 접수 및 MD의 카테고리 단위 검수·조정 프로세스를 지원하는 시스템 부재 문제 해결.',
      '셀러 이의제기·MD 검수 어드민과 정책 반영을 담당하여 실현 수수료율을 5.25% → 8.8%(+3.5%p)로 상향·정착. 유사 GMV(월 약 118억 원) 기준 월 수수료 매출 6.3억 → 10.6억(+68%) 개선, 이후 5개월 이상 안정 유지.',
      '카테고리 트리 기반 검수 리스트/이의제기 처리 어드민 구축. 카테고리 API를 BFF로 이관하고 검수 완료·이의제기 대응 API를 연동하여 MD 운영 플로우를 시스템화. 대량 데이터 테이블 렌더링 성능을 개선하고 Relay·REST 간 캐시 불일치 문제 해결.',
    ],
    technologies: ['React', 'TypeScript', 'GraphQL', 'Relay'],
  },
  {
    title: '장바구니 서비스 신규 구축',
    period: '2025. 11 — 2025. 12',
    organization: '레브잇',
    description: [
      '기존 단건 구매(Single-item purchase) 프로세스로 인해 ARPPU 및 객단가(AOV) 상승에 구조적 한계가 있는 문제 해결.',
      "장바구니 도입으로 주력 구매 구간(3~4만 원) 비중을 22%까지 확대하고, 전체 구매의 65%를 1.5만 원 이상 구간으로 안착시키며 객단가(AOV) 및 ARPPU 구조적 개선 달성. 장바구니 경유 GMV 비중은 4.5%('25.10) → 약 16%('26.8~9), 월 14억 원 규모로 성장.",
      'Fragment Colocation을 적용하여 각 컴포넌트 파일 내에 필요한 데이터를 직접 선언하도록 구조화. 하위 컴포넌트의 데이터 요구사항 변경이 상위 부모 코드에 영향을 주지 않는 격리된 구조를 완성하여 유지보수 생산성 증대. 이후 장바구니 조회·뮤테이션을 Relay Connection 기반으로 마이그레이션하고 불필요한 API 호출을 제거해 웹뷰·네이티브 양쪽의 데이터 정합성과 응답성 개선.',
    ],
    technologies: ['React', 'TypeScript', 'GraphQL', 'Relay'],
  },
  {
    title: '추석 전문관 구축',
    organization: '레브잇',
    description: [
      '연중 최대 시즌인 추석에 타임특가·브랜드위크·셀러특가·선물세트 등 흩어진 행사를 한곳에 모으고, 룰렛 쿠폰으로 구매 전환을 끌어올리는 전용 매장 구축.',
      '행사 기간(16일) 전문관 경유 GMV 5.2억 원, 구매자 2.6만 명으로 같은 기간 전체 GMV의 약 9.5% 차지. 한가위 특가 룰렛 쿠폰은 약 8.8만 건 주문·4.3만 명 구매자·GMV 10.6억 원(전체 GMV의 약 19%)의 구매를 견인.',
      '8종 매장과 룰렛·한가위 풍년 패스를 오픈 약 1주 전부터 집중 개발. 상품 단위(PER_PRODUCT) 신규 쿠폰 체계와 쿠폰 우선순위 로직에 대응하고, MD가 브랜드데이 세팅을 사전에 확인할 수 있는 미리보기 기능을 제공해 운영 리스크 감소.',
    ],
    technologies: ['React', 'TypeScript', 'GraphQL', 'Relay'],
  },
  {
    title: '올프레시(1P 장보기) 매장 구축',
    organization: '레브잇',
    description: [
      "직매입(1P) 신선식품 사업 '올프레시'를 위해 최소주문금액·묶음 배송·묶음 취소 등 기존 오픈마켓(3P)과 다른 구매 여정을 앱 전반에 반영.",
      "매장 오픈('26.4)과 Phase 2·풀무원 브랜드위크를 거치며 1P 월 GMV 0.77억('26.3) → 3.7억('26.5)으로 약 4.8배, 월 구매자 1.35만 → 2.6만 명으로 성장.",
      '매장·PDP·장바구니(올프레시/일반 섹션 분리)·주문결제·주문배송 조회 전 구간을 개발하고, 상품 판별 기준을 셀러 ID에서 productType으로 통일해 분기 로직 단순화. 최저가 비교 섹션, 최소주문금액 미달 시 묶음 취소 플로우 등 1P 전용 UX 구현.',
    ],
    technologies: ['React', 'TypeScript', 'GraphQL', 'Relay'],
  },
  {
    title: '네이티브 → 웹뷰 전환 & 프론트엔드 플랫폼 개선',
    organization: '레브잇',
    description: [
      '핵심 화면이 React Native 네이티브로 구현되어 수정마다 CodePush·앱 배포에 의존하고, 화면마다 UI가 중복 구현되어 일관성과 개발 속도가 떨어지는 문제 해결.',
      '홈·관심상품·쿠폰함·주문목록/상세·환불 신청·리뷰·베스트 등 10개 이상의 네이티브 화면을 웹뷰로 이관해 앱 배포 없이 기능을 즉시 배포할 수 있는 구조로 전환.',
      'Stackflow 기반 웹뷰 페이지 전환과 피처키 기반 점진적 전환 전략 적용. Storybook·Tailwind 기반 사내 디자인 시스템을 구축해 주요 매장에 적용하고, 프론트엔드 모노레포 편입, 변경된 앱만 검사하는 lint·typecheck CI, Vitest 도입. 주문 페이지의 MobX 쿠폰 로직을 React Query와 순수 함수로 단계적으로 분리(결제금액 갱신 지점 10곳 → 1곳).',
    ],
    technologies: ['React', 'React Native', 'Stackflow', 'Storybook', 'Tailwind CSS', 'Vitest'],
  },
  {
    title: '브랜드위크 CMS 템플릿화',
    organization: '레브잇',
    description: [
      '브랜드위크 행사마다 페이지를 하드코딩으로 새로 개발해야 해서, 행사가 늘어날수록 개발 리소스가 반복 소모되는 문제 해결.',
      '종근당·동국제약·풀무원·동원·피죤 등 8개 브랜드의 브랜드위크를 진행하며 페이지를 CMS 블록 기반 템플릿으로 전환해, 이후 행사는 MD가 어드민에서 블록을 조합해 구성할 수 있도록 개선.',
      '섹션·카테고리 탭·카운트다운 등 CMS 블록 렌더러와 어드민 미리보기(실데이터·드래그앤드롭 구성) 개발. 1,500줄 규모의 CMS 어드민 코드를 모듈 단위로 재구성하고 AntD를 shadcn/ui로 전환.',
    ],
    technologies: ['React', 'TypeScript', 'shadcn/ui'],
  },
  {
    title: '딜 구조 V2 마이그레이션',
    period: '2025. 07 — 2025. 12',
    organization: '레브잇',
    description: [
      '딜 오픈 프로세스가 경직된 레거시 구조로 되어 있어, 신규 딜 생성에 1달 이상 소요되는 운영 비효율 해결.',
      '딜 구조 개편을 통해 딜 오픈 소요 시간을 2~3일로 약 90% 단축하여 운영 효율성 및 기획전 대응 속도 극대화.',
      '다양한 딜 타입을 하나의 인터페이스로 처리할 수 있도록 Compound Component 패턴 도입. 공통 UI(가격, 썸네일)와 가변 UI(타이머, 배지)를 조립 가능한 형태로 모듈화. 브랜드딜·우주최저가·10분 핫딜·기획전 등 주요 매대를 V2 API로 이관.',
    ],
    technologies: ['React', 'TypeScript', 'GraphQL', 'Relay'],
  },
  {
    title: 'O2O 현장 수령 시스템 및 바코드 검증 기능 구축',
    period: '2024. 12 — 2025. 01',
    organization: '케이타운포유',
    description: [
      '기존 수기 명부 확인 방식의 비효율로 인해 오프라인 행사 시 대기 줄이 길어지고, 콘서트장 등 인파가 몰리는 장소의 네트워크 불안정으로 인해 데이터 조회가 지연되는 문제 해결.',
      '바코드 스캔 시스템 도입으로 1인당 수령 시간을 10초 이내로 단축하고, 네트워크 지연 상황에서도 안정적인 바코드 노출을 보장하여 대규모 행사 기간 동안 현장 운영 이슈 제로(0건) 달성.',
      '네트워크가 혼잡한 현장 특성을 고려하여 React Query의 Caching 옵션을 전략적으로 설정해, 네트워크 연결이 끊기거나 지연되어도 바코드 및 주문 정보가 즉시 로딩되도록 구현.',
    ],
    technologies: ['React', 'TypeScript', 'React Query'],
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
];

export const WRITING: Writing[] = [
  {
    title: '글또 10기 활동',
    description:
      "'글쓰는 또라이가 세상을 바꾼다'라는 모토를 가진 개발자 글쓰기 모임. 테크니컬 라이터로 활동하며 모든 글은 개인 블로그에 기고.",
    year: '2024',
  },
  {
    title: '원티드 프리온보딩 인턴십',
    description: '기업 과제 수행 및 협업 경험.',
    year: '2023',
  },
];
