/**
 * category controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::category.category",
  ({ strapi }) => ({
    async find(ctx) {
      await this.validateQuery(ctx);

      const results = await strapi.entityService.findMany(
        "api::category.category",
        {
          ...ctx.query,
          populate: {
            thumbnail: true,
            sub_collections: {
              populate: {
                thumbnail: true,
                recipe: {
                  populate: {
                    image: true,
                  },
                },
              },
            },
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
