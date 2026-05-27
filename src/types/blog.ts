export interface BlogSection {
  heading?: string;
  content: string;
}

export interface BlogAuthor {
  name: string;
  role: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categoryColor: string;
  tags: string[];
  publishedAt: string;
  /** 마지막 수정일 (YYYY-MM-DD). 없으면 publishedAt으로 대체 */
  lastModified?: string;
  readTime: string;
  thumbnail: string;
  excerpt: string;
  /** Markdown body (새 포맷). 있으면 sections 대신 사용됨 */
  body?: string;
  /** 레거시 섹션 포맷 — body 없을 때 fallback */
  sections: BlogSection[];
  author?: BlogAuthor;
  references?: string[];
  relatedPosts?: string[];
}
