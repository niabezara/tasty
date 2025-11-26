/**
 * collection controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::collection.collection",
  ({ strapi }) => ({
    async find(ctx) {
      await this.validateQuery(ctx);

      const results = await strapi.entityService.findMany(
        "api::collection.collection",
        {
          ...ctx.query,
          populate: {
            MainComponents: { populate: "*" },
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
