// =====================
// Image & Formats
// =====================

export interface ImageFormat {
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

export interface ImageFormats {
  thumbnail?: ImageFormat;
  [key: string]: ImageFormat | undefined;
}

export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
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
  publishedAt: string | null;
}

// =====================
// Recipe Description (Rich Text)
// =====================

export interface RichTextChild {
  text: string;
  type: string;
}

export interface RichTextBlock {
  type: string;
  children: RichTextChild[];
}

// =====================
// Recipe
// =====================

export interface Recipe {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  name: string;
  slug: string | null;
  ingredients: string;
  description: RichTextBlock[];
  cookTime: number | null;
  image: StrapiImage[];
}

// =====================
// Sub Collection
// =====================

export interface SubCollection {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  subTitle: string;
  thumbnail: StrapiImage[];
  recipes: Recipe[];
}

// =====================
// Category
// =====================

export interface Category {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  title: string;
  slug: string | null;
  categoryDescription: string | null;
  thumbnail: StrapiImage[];
  featuredRecipe: Recipe;
  sub_collections: SubCollection[];
}

// =====================
// API Response
// =====================

export interface CategoryResponse {
  data: Category[];
  meta: unknown;
}
