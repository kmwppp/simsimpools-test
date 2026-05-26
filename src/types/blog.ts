export interface BlogSection {
  heading?: string;
  content: string;
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categoryColor: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
  thumbnail: string;
  excerpt: string;
  sections: BlogSection[];
  relatedPosts?: string[];
}
