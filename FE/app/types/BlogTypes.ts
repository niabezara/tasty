import { StrapiImage } from ".";

// ================================
// Blog Entity
// ================================
export type BlogData = {
  id: number;
  documentId: string;
  title: string;
  descriptionTest: string;
  image: StrapiImage[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

// ================================
// Pagination
// ================================
export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

// ================================
// API Meta
// ================================
export type StrapiMeta = {
  pagination: Pagination;
};

// ================================
// Full API Response
// ================================
export type BlogResponse = {
  data: BlogData[];
  meta: StrapiMeta;
};
