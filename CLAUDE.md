# Blog Project

Astro 기반 개인 블로그 + 포트폴리오 사이트.
MDX Content Collections로 콘텐츠를 로컬 관리.

## Tech Stack

- **Framework**: Astro 5, React 19 (Islands), TypeScript 5.9
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`, CSS-based config), SCSS (포스트 콘텐츠)
- **CMS**: Astro Content Collections + MDX (로컬 파일)
- **Fonts**: Inter (Google), GmarketSans (로컬 TTF)
- **Theme**: 바닐라 JS (dark/light, 기본값: dark, FOUC 방지 inline script)
- **Comments**: Giscus (GitHub Discussions)
- **Deploy**: Vercel
- **Package Manager**: pnpm (enforced)
- **Lint/Format**: ESLint + Prettier

## Commands

```bash
pnpm dev          # 개발 서버
pnpm build        # 프로덕션 빌드 (정적 출력)
pnpm preview      # 빌드 결과 프리뷰
pnpm lint         # ESLint 린트
pnpm lint:fix     # ESLint 자동 수정
pnpm format       # Prettier 포맷
```

## Project Structure

```
src/
├── content/
│   ├── posts/              # MDX 블로그 포스트
│   └── content.config.ts   # Content Collections Zod 스키마 (src/ 루트)
├── layouts/
│   ├── BaseLayout.astro    # HTML 루트 레이아웃 (메타, OG, 테마, FOUC 방지)
│   └── PortfolioLayout.astro # 다크 테마 래퍼 + 마우스 플래시라이트
├── pages/
│   ├── index.astro         # 포트폴리오 홈페이지
│   ├── 404.astro           # 커스텀 404
│   ├── about.astro         # "/" 로 301 리다이렉트
│   └── posts/
│       ├── [...page].astro # 페이지네이션 목록
│       └── [slug].astro    # 개별 포스트
├── components/
│   ├── portfolio/          # 포트폴리오 섹션 컴포넌트
│   │   ├── Sidebar.astro       # 좌측 스티키 사이드바 + 네비게이션
│   │   ├── SectionHeader.astro # 반복되는 섹션 헤더 (모바일 스티키/데스크톱 sr-only)
│   │   ├── HoverCard.astro     # 포트폴리오 리스트 아이템 호버 효과 래퍼
│   │   ├── ExperienceCard.astro
│   │   └── ProjectCard.astro
│   ├── icons/              # SVG Astro 아이콘 컴포넌트
│   │   └── SocialIcon.astro    # 아이콘 이름으로 동적 렌더링
│   ├── Bookmark.astro      # MDX 북마크 카드
│   ├── Giscus.astro        # 댓글 (바닐라 JS, lazy load)
│   ├── TableOfContents.astro
│   └── ThemeToggle.astro
├── data/
│   └── portfolio.ts        # 포트폴리오 콘텐츠 (순수 TS 데이터 + 타입 정의)
├── styles/
│   ├── global.css          # 스타일 엔트리포인트 (모든 CSS/SCSS import)
│   ├── theme.css           # Tailwind v4 @theme + @custom-variant dark
│   ├── fonts.css           # @font-face + Google Fonts
│   ├── post.scss           # #post 스코프 블로그 콘텐츠 스타일
│   └── highlight.scss      # highlight.js 코드 하이라이트 테마
└── utils/
    ├── extractTOC.ts       # Astro headings → TOCItem 변환
    └── rehypeSlugKorean.ts # 한국어 헤딩 ID 생성 (h2-h3 계층)
```

## Content Pipeline

1. `src/content/posts/*.mdx` 파일에 frontmatter + MDX 콘텐츠 작성
2. `src/content.config.ts`의 Zod 스키마로 타입 검증
3. Astro 마크다운 파이프라인:
   - `remark-gfm` → `rehypeSlugKorean` → `rehype-highlight`
4. `<Content />` 컴포넌트로 렌더링, `<Bookmark />` 등 MDX 컴포넌트 지원

## Styling Architecture

- **Tailwind v4 CSS-based config**: `tailwind.config.ts` 없이 `theme.css`에서 `@theme` 블록으로 토큰 정의
- **Dark mode**: `@custom-variant dark` (selector 방식, `.dark` 클래스)
- **Color system**: shadcn/ui HSL 변수 (`--background`, `--foreground` 등) + accent 스케일
- **포스트 스타일**: `post.scss`에서 `#post` 스코프로 MDX 콘텐츠 스타일링
- **스타일 import 체인**: `global.css` → fonts.css, tailwindcss, theme.css, post.scss, highlight.scss

## Conventions

- **Astro 컴포넌트**: PascalCase `.astro` 파일
- **React 컴포넌트**: Islands Architecture — `client:load` 디렉티브로 필요한 곳에만 hydration
- **데이터/유틸**: camelCase 파일명
- **상수**: SCREAMING_SNAKE_CASE
- **Import**: `@/` path alias (`src/`)로 절대경로 사용
- **인터랙션**: 가능한 바닐라 JS 사용, React는 복잡한 상태 관리가 필요한 곳에만
- **타입**: `TOCItem` 등 공유 타입은 `utils/extractTOC.ts`에 정의, 다른 파일에서 `import type`으로 재사용
- **포트폴리오 컴포넌트**: 반복되는 UI 패턴은 `HoverCard`, `SectionHeader` 등으로 추출
- **Astro 이벤트**: `astro:page-load` 이벤트로 클라이언트 스크립트 초기화 (MPA 호환)

## Key Notes

- 모든 페이지는 정적 생성 (`output: "static"`)
- 이미지는 로컬 저장 (`public/` 디렉토리)
- 사용자 인증 없음, 환경 변수 불필요
- shadcn/ui 사용 가능 (React Islands로 hydration)
- Vercel Analytics + Speed Insights (`BaseLayout.astro`에서 로드)
