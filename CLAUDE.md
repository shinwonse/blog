# Blog Project

Astro 기반 개인 블로그 + 포트폴리오 사이트.
MDX Content Collections로 콘텐츠를 로컬 관리.

## Tech Stack

- **Framework**: Astro 5, React 19 (Islands), TypeScript 5.9
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`), SCSS (포스트 콘텐츠)
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
│   └── config.ts           # Content Collections Zod 스키마
├── layouts/
│   ├── BaseLayout.astro    # HTML 루트 레이아웃 (메타, OG, 테마)
│   └── PortfolioLayout.astro # 다크 테마 래퍼 + 마우스 플래시라이트
├── pages/
│   ├── index.astro         # 포트폴리오 홈페이지
│   ├── 404.astro           # 커스텀 404
│   ├── about.astro         # "/" 로 301 리다이렉트
│   └── posts/
│       ├── [...page].astro # 페이지네이션 목록
│       └── [slug].astro    # 개별 포스트
├── components/
│   ├── portfolio/          # Sidebar, ExperienceCard, ProjectCard
│   ├── icons/              # SVG Astro 아이콘 컴포넌트
│   ├── Bookmark.astro      # MDX 북마크 카드
│   ├── Giscus.astro        # 댓글 (바닐라 JS)
│   ├── TableOfContents.astro
│   └── ThemeToggle.astro
├── data/
│   └── portfolio.ts        # 포트폴리오 콘텐츠 (순수 TS 데이터)
├── styles/
│   ├── global.css          # Tailwind + 테마 + 포스트 스타일 통합
│   ├── theme.css           # Tailwind v4 @theme (accent, animations)
│   ├── fonts.css           # @font-face + Google Fonts
│   ├── post.scss           # #post 스코프 블로그 콘텐츠 스타일
│   └── highlight.scss      # highlight.js 코드 테마
└── utils/
    ├── extractTOC.ts       # Astro headings → TOCItem 변환
    └── rehypeSlugKorean.ts # 한국어 헤딩 ID 생성 (h2-h3 계층)
```

## Content Pipeline

1. `src/content/posts/*.mdx` 파일에 frontmatter + MDX 콘텐츠 작성
2. `content.config.ts`의 Zod 스키마로 타입 검증
3. Astro 마크다운 파이프라인:
   - `remark-gfm` → `rehypeSlugKorean` → `rehype-highlight`
4. `<Content />` 컴포넌트로 렌더링, `<Bookmark />` 등 MDX 컴포넌트 지원

## Conventions

- **Astro 컴포넌트**: PascalCase `.astro` 파일
- **React 컴포넌트**: Islands Architecture — `client:load` 디렉티브로 필요한 곳에만 hydration
- **데이터/유틸**: camelCase 파일명
- **상수**: SCREAMING_SNAKE_CASE
- **Import**: `@/` path alias (`src/`)로 절대경로 사용
- **인터랙션**: 가능한 바닐라 JS 사용, React는 복잡한 상태 관리가 필요한 곳에만

## Key Notes

- 모든 페이지는 정적 생성 (`output: "static"`)
- 이미지는 로컬 저장 (Supabase 불필요)
- 사용자 인증 없음, 환경 변수 불필요
- shadcn/ui 사용 가능 (React Islands로 hydration)
