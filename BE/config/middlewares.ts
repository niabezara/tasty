export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::logger",
    config: {
      level: "http",
      // Suppress ECONNRESET errors from video streaming
      transports: [
        {
          level: "http",
          silent: false,
          handleExceptions: false,
          handleRejections: false,
        },
      ],
    },
  },
];
