/**
 * fav-recepie controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::fav-recepie.fav-recepie",
  ({ strapi }) => ({
    async find(ctx) {
      await this.validateQuery(ctx);

      const results = await strapi.entityService.findMany(
        "api::fav-recepie.fav-recepie",
        {
          ...ctx.query,
          populate: {
            favComponents: {
              populate: "*",
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
