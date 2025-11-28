export interface CategoriesResponse {
  data: Category[];
  meta: Record<string, unknown>;
}

export interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  recipes: Recipe[];
}
export interface Recipe {
  id: number;
  documentId: string;
  title: string;
  slug: string | null;
  description: RichTextBlock[];
  cookTime: number | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  thumbnail: Media;
}
export interface RichTextBlock {
  type: "paragraph";
  children: RichTextChild[];
}

export interface RichTextChild {
  text: string;
  type: "text";
}
export interface Media {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: MediaFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
export interface MediaFormats {
  thumbnail?: MediaFormat;
  small?: MediaFormat;
  medium?: MediaFormat;
  large?: MediaFormat;
}
export interface MediaFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}
