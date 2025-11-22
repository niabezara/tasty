// ---------- MAIN CATEGORY TYPES ---------- //
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
