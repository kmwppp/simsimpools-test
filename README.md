# 심심풀이 — 감성 심리 콘텐츠 플랫폼

> 나를 더 잘 이해하는 심리 테스트 & 성격 분석 플랫폼

## 기술 스택

- **React 18** + **Vite 5** + **TypeScript**
- **React Router v6** (클라이언트 사이드 라우팅)
- **TailwindCSS v3**
- **react-helmet-async** (SEO 메타태그)
- **Cloudflare Pages** 배포

## 프로젝트 구조

```
src/
├── components/
│   ├── layout/       # Header, Footer, Layout
│   ├── seo/          # SEOMeta 컴포넌트
│   ├── ui/           # AdPlaceholder, Badge 등
│   └── home/         # Hero, PopularTests, LatestPosts 등
├── data/
│   ├── tests/        # 테스트별 데이터 (5개)
│   ├── tests.ts      # 테스트 인덱스 & 유틸
│   └── blog.ts       # 블로그 포스트 (12개)
├── hooks/
│   └── useTestState.ts  # localStorage 기반 테스트 진행 상태
├── pages/            # 11개 페이지
└── types/            # TypeScript 인터페이스
```

## 페이지 목록

| 경로 | 페이지 |
|------|--------|
| `/` | 홈 |
| `/tests` | 테스트 목록 |
| `/tests/:testId` | 테스트 상세 (퀴즈 진행) |
| `/results/:testId/:resultId` | 테스트 결과 |
| `/blog` | 칼럼 목록 |
| `/blog/:postId` | 칼럼 상세 |
| `/about` | 소개 |
| `/contact` | 문의 |
| `/privacy` | 개인정보처리방침 |
| `/terms` | 이용약관 |
| `*` | 404 |

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## Cloudflare Pages 배포

1. GitHub에 리포지토리 생성 후 푸시
2. Cloudflare Pages → Create a project → Connect to GitHub
3. 설정:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** `20`
4. Deploy

> `_redirects` 파일이 SPA 라우팅을 처리합니다.

## AdSense 광고 삽입 방법

광고 placeholder 위치 (심사 승인 후 교체):

1. **홈 중간** — `src/pages/Home.tsx`의 `<AdPlaceholder position="home-mid" />`
2. **결과 중간** — `src/pages/ResultPage.tsx` 의 `<AdPlaceholder position="result-mid" />`
3. **콘텐츠 하단** — 각 페이지의 `<AdPlaceholder position="content-bottom" />`

AdSense 승인 후 `src/components/ui/AdPlaceholder.tsx`의 placeholder div를 AdSense 코드로 교체하세요.

## 테스트 추가 방법

1. `src/data/tests/` 에 새 파일 생성 (기존 파일 참고)
2. `src/data/tests.ts` import 및 `tests` 배열에 추가
3. 빌드 후 자동 반영

## 콘텐츠 추가 방법

`src/data/blog.ts`의 `blogPosts` 배열에 `BlogPost` 타입에 맞는 객체를 추가하세요.

## SEO 구조

- react-helmet-async로 페이지별 title, description, OG 태그 설정
- `public/robots.txt` — 크롤러 허용
- `public/sitemap.xml` — 전체 URL 포함
- Semantic HTML 구조 (`article`, `header`, `nav`, `main`, `footer`)
- `_headers` — 보안 헤더 설정

## 라이센스

MIT
