/**
 * blog controller
 */

import { factories } from "@strapi/strapi";

interface PaginationQuery {
  page?: number;
  pageSize?: number;
}

export default factories.createCoreController(
  "api::blog.blog",
  ({ strapi }) => ({
    async find(ctx) {
      const pagination = (ctx.query.pagination as PaginationQuery) || {};
      const page = pagination.page || 1;
      const pageSize = pagination.pageSize || 10;

      const maxPageSize = 50;
      const sanitizedPageSize = Math.min(Number(pageSize), maxPageSize);

      ctx.query = {
        ...ctx.query,
        pagination: {
          page: Number(page),
          pageSize: sanitizedPageSize,
          withCount: true,
        },
      };

      const { data, meta } = await super.find(ctx);

      return { data, meta };
    },
  })
);
