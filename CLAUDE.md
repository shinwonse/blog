# Blog Project

Next.js 16 (App Router) 기반 개인 블로그 + 포트폴리오 사이트.
Notion을 CMS로, Supabase를 이미지 스토리지로 사용.

## Tech Stack

- **Framework**: Next.js 16.1.0, React 19, TypeScript 5.6
- **Styling**: Tailwind CSS v4, shadcn/ui, SCSS (포스트 콘텐츠)
- **CMS**: Notion API (`@notionhq/client`, `notion-to-md`)
- **Storage**: Supabase (이미지 전용, `post` bucket)
- **Fonts**: Inter (Google), GmarketSans (로컬 TTF)
- **Theme**: `next-themes` (dark/light, 기본값: dark)
- **Comments**: Giscus (GitHub Discussions)
- **Deploy**: Vercel
- **Package Manager**: pnpm (enforced)

## Commands

```bash
pnpm dev          # 개발 서버
pnpm build        # 프로덕션 빌드
pnpm lint         # Biome 린트
pnpm lint:fix     # Biome 자동 수정
pnpm format       # Biome 포맷
pnpm format:tailwind  # Prettier Tailwind 클래스 정렬
```

## Project Structure

```
src/
├── app/                    # App Router 페이지
│   ├── (home)/             # 홈/포트폴리오 페이지
│   ├── (post)/posts/       # 포스트 목록 + [slug] 상세
│   ├── (about)/about/      # "/" 로 리다이렉트
│   └── api/bookmark/       # OG 메타데이터 스크래핑 API
├── components/
│   ├── portfolio/          # 포트폴리오 전용 컴포넌트
│   ├── ui/                 # shadcn/ui 컴포넌트
│   ├── header/, footer/, mode-toggle/, theme-provider/
│   └── index.ts            # barrel export
├── constants/
│   ├── notion.ts           # Notion DB ID 상수
│   └── portfolio.tsx       # 포트폴리오 콘텐츠 (PROFILE, EXPERIENCE, PROJECTS 등)
├── services/
│   ├── notion.ts           # Notion 클라이언트
│   ├── supabase.ts         # Supabase 클라이언트
│   └── post.ts             # getPost, getAllPosts, getPaginatedPosts
├── styles/                 # global.css, theme.css, post.scss, highlight.scss
├── types/                  # notion.ts, portfolio.ts 타입 정의
└── utils/
    ├── cn.ts               # clsx + twMerge
    ├── rehypeBookmark.ts   # 북마크 리치 카드 변환
    ├── rehypeImage.ts      # Notion 이미지 → Supabase 업로드 (server-only)
    └── rehypeTOC.ts        # 헤딩에서 TOC 생성
```

## Conventions

- **컴포넌트**: PascalCase 파일명, 디렉토리마다 `index.ts` barrel export
- **유틸/서비스**: camelCase 파일명
- **상수**: SCREAMING_SNAKE_CASE
- **Import**: `@/` path alias (`src/`)로 절대경로 사용
- **CSS 클래스 조합**: `cn()` 유틸리티 사용 (`clsx` + `tailwind-merge`)
- **Lint/Format**: Biome (single quotes, import 자동 정리). Prettier는 Tailwind 클래스 정렬 전용
- **서버 전용 코드**: `import 'server-only'` 사용 (예: `rehypeImage.ts`)

## Content Pipeline

1. Notion API → DB에서 포스트 메타데이터 fetch
2. `notion-to-md` → Notion 블록을 Markdown 변환
3. unified/remark/rehype 파이프라인:
   - `remark-gfm` → `remark-rehype` → `rehype-highlight`
   - 커스텀 플러그인: `rehypeTOC`, `rehypeImage` (Supabase 업로드), `rehypeBookmark`
4. 최종 HTML → `dangerouslySetInnerHTML`로 렌더링

## Environment Variables

| 변수 | 용도 |
|------|------|
| `NEXT_PUBLIC_NOTION_SECRET_TOKEN` | Notion API 토큰 |
| `SUPABASE_URL` | Supabase 프로젝트 URL |
| `SUPABASE_KEY` | Supabase 서비스 키 (서버 전용) |
| `NEXT_PUBLIC_BASE_URL` | 퍼블릭 베이스 URL (기본: `http://localhost:3000`) |

## Key Notes

- Notion 이미지 URL은 만료됨 → `rehypeImage`가 빌드 시 Supabase에 영구 업로드
- 포스트 페이지는 `generateStaticParams`로 정적 생성
- 포스트 목록은 SSR (searchParams로 페이지네이션)
- 사용자 인증 없음. Supabase는 스토리지 전용
