# Development Guidelines

## Adding New Pages

1. 모든 페이지는 `PortfolioLayout` 또는 `BaseLayout`으로 감싼다
2. 포트폴리오 계열 페이지는 `PortfolioLayout` 사용 (다크 테마 + flashlight 효과)
3. 새 블로그 포스트는 `src/content/posts/` 에 MDX 파일로 추가

## Adding New Components

- Astro 컴포넌트 우선. React는 `useState`/`useEffect` 등 상태 관리가 필요한 경우에만 사용
- React 컴포넌트 사용 시 `client:load` 또는 `client:visible` 디렉티브 필수
- 아이콘 추가 시 `src/components/icons/` 에 Astro 컴포넌트로 생성 후 `SocialIcon.astro`에 매핑

## Styling Rules

- 컴포넌트 스타일은 Tailwind 유틸리티 클래스 사용
- MDX 포스트 콘텐츠 스타일은 `post.scss`의 `#post` 스코프 안에서 관리
- 새 Tailwind 테마 토큰은 `theme.css`의 `@theme` 블록에 추가 (`tailwind.config.ts` 없음)
- shadcn/ui 컬러 변수는 `global.css`에서 `:root`, `.dark`, `.portfolio-theme`에 정의

## Important Patterns

- `HoverCard.astro`: 포트폴리오 리스트 아이템의 호버 효과. 새 카드 컴포넌트 추가 시 이 래퍼 사용
- `SectionHeader.astro`: 포트폴리오 섹션 제목. 모바일에서는 스티키, 데스크톱에서는 sr-only
- `rehypeSlugKorean`: h3 ID는 부모 h2 텍스트를 prefix로 포함하여 한국어 헤딩 충돌 방지

## Testing Changes

```bash
pnpm build    # 빌드 에러 확인 (필수)
pnpm lint     # 린트 에러 확인
```
