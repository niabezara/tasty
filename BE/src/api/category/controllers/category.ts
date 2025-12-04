/**
 * category controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::category.category",
  ({ strapi }) => ({
    async find(ctx) {
      const results = await strapi.entityService.findMany(
        "api::category.category",
        {
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

      const sanitized = await this.sanitizeOutput(results, ctx);
      return this.transformResponse(sanitized);
    },

    async findOne(ctx) {
      const { id } = ctx.params;

      const result = await strapi.entityService.findOne(
        "api::category.category",
        id,
        {
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

      const sanitized = await this.sanitizeOutput(result, ctx);
      return this.transformResponse(sanitized);
    },
  })
);
