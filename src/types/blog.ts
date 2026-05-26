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
  readTime: string;
  thumbnail: string;
  excerpt: string;
  sections: BlogSection[];
  author?: BlogAuthor;
  references?: string[];
  relatedPosts?: string[];
}
