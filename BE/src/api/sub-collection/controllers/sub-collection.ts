/**
 * sub-collection controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::sub-collection.sub-collection",
  ({ strapi }) => ({
    async find(ctx) {
      await this.validateQuery(ctx);

      const results = await strapi.entityService.findMany(
        "api::sub-collection.sub-collection",
        {
          ...ctx.query,
          populate: {
            thumbnail: true,
            recipes: true,
          },
        }
      );

      const sanitizedResults = await this.sanitizeOutput(results, ctx);

      return this.transformResponse(sanitizedResults);
    },

    async healthCheck(ctx) {
      try {
        ctx.body = "ok";
      } catch (err) {
        ctx.body = err;
      }
    },
  })
);
