export interface NewsArticle {
  article_id: string;
  title: string;
  description: string;
  image_url: string | null;
}

export interface NewsApiResponse {
  status: string;
  totalResults: number;
  results: NewsArticle[];
  nextPage: string | null;
}