import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStrapiURL() {
  return process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
}

export function getStrapiMedia(url: string | null) {
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${getStrapiURL()}${url}`;
}

const capitalize = (text: string): string => {
  return text?.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const toUpperCase = (text: string): string => {
  if (typeof text !== "string") {
    return "";
  }

  if (/[ა-ჰ]/.test(text)) {
    return text.toLocaleUpperCase("ka-GE");
  } else if (/[a-zA-Z]/.test(text)) {
    return text.toUpperCase(); // Return English text as-is
  } else if (/[а-яА-Я]/.test(text)) {
    return capitalize(text);
  }

  return text;
};

export function stripHtmlTags(html: string): string {
  const textWithLineBreaks = html.replace(/<p>/g, "").replace(/<\/p>/g, "\n\n");
  const textWithoutHtml = textWithLineBreaks.replace(/<\/?[^>]+(>|$)/g, "");
  const cleanedText = textWithoutHtml.replace(/&nbsp;/g, " ");
  return cleanedText.replace(/[ \t]+/g, " ").trim();
}

export function formatDate(date: Date | string): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
