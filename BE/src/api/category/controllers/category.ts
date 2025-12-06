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
            featuredRecipe: {
              populate: {
                image: true,
              },
            },
            sub_collections: {
              populate: {
                thumbnail: true,
                recipes: {
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

      try {
        const result = await strapi
          .documents("api::category.category")
          .findOne({
            documentId: id,
            populate: {
              thumbnail: true,
              featuredRecipe: {
                populate: {
                  image: true,
                },
              },
              sub_collections: {
                populate: {
                  thumbnail: true,
                  recipes: {
                    populate: {
                      image: true,
                    },
                  },
                },
              },
            },
          });

        return result;
      } catch (error) {
        ctx.throw(500, `Error fetching category: ${error.message}`);
      }
    },
  })
);
