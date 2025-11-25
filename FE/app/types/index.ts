// ---------- MAIN CATEGORY TYPES ---------- //
export interface MainCategoryResponse {
  data: MainCategoryData;
  meta: Record<string, unknown>;
}
export interface MainCategoryData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  MainComponents: MainComponent[];
}

export interface MainComponent {
  id: number;
  title: string;
  Image: StrapiImage;
}

// ---------- IMAGE TYPES ---------- //

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
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
}

export interface ImageFormats {
  small?: ImageFormat;
  medium?: ImageFormat;
  thumbnail?: ImageFormat;
}

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

// ---------- VIDEO TYPES ---------- //

export interface FavResponse {
  data: FavData;
  meta: Record<string, unknown>;
}

export interface FavData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  favComponents: FavComponent[];
}

// ---------- COMPONENT ---------- //

export interface FavComponent {
  id: number;
  title: string;
  Image: StrapiMedia;
}

// ---------- STRAPI MEDIA TYPE ---------- //

export interface StrapiMedia {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: StrapiImageFormats | null;
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

// ---------- OPTIONAL IMAGE FORMATS ---------- //
export interface StrapiImageFormats {
  thumbnail?: StrapiImageFormat;
  small?: StrapiImageFormat;
  medium?: StrapiImageFormat;
  large?: StrapiImageFormat;
}

export interface StrapiImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
}
