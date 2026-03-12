export interface NewsArticle {
  article_id: string;
  title: string;
  link: string;
  description: string;
  content: string;
  pubDate: string;
  image_url: string | null;
  source_id: string;
  source_name: string;
  category: string[];
  creator: string[] | null;
}

export interface NewsApiResponse {
  status: string;
  totalResults: number;
  results: NewsArticle[];
  nextPage: string | null;
}