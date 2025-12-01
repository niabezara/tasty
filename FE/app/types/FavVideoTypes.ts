export interface VideoFormat {
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

export interface VideoFormats {
  thumbnail: VideoFormat;
}

export interface VideoItem {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: VideoFormats;
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

export interface VideoRecipeItem {
  id: number;
  title: string;
  video: VideoItem[];
}

export interface VideoRecipeData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  videoRecepie: VideoRecipeItem[];
}

export interface VideoRecipeResponse {
  data: VideoRecipeData;
  meta: Record<string, unknown>;
}
