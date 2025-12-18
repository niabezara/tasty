/**
 * blog controller
 */

import { factories } from "@strapi/strapi";

type PaginationQuery = {
  page?: string;
  pageSize?: string;
};

export default factories.createCoreController("api::blog.blog", () => ({
  async find(ctx) {
    const pagination = (ctx.query.pagination ?? {}) as PaginationQuery;

    const page = Number(pagination.page) || 1;
    const pageSize = Math.min(Number(pagination.pageSize) || 10, 50);

    ctx.query = {
      ...ctx.query,
      pagination: {
        page: String(page),
        pageSize: String(pageSize),
        withCount: "true",
      },
    };

    return await super.find(ctx);
  },
}));
