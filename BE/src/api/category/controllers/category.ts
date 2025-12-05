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

    //   async findOne(ctx) {
    //     const { documentId } = ctx.params;

    //     const result = await strapi.db.query("api::category.category").findOne({
    //       where: { documentId },
    //       populate: {
    //         thumbnail: true,
    //         sub_collections: {
    //           populate: {
    //             thumbnail: true,
    //             recipes: {
    //               populate: {
    //                 image: true,
    //               },
    //             },
    //           },
    //         },
    //       },
    //     });

    //     return result;
    //   },
  })
);
