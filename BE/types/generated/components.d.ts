import type { Schema, Struct } from '@strapi/strapi';

export interface FavDishesVideoComponent extends Struct.ComponentSchema {
  collectionName: 'components_fav_dishes_video_components';
  info: {
    displayName: 'VideoComponent';
  };
  attributes: {
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'fav-dishes.video-component': FavDishesVideoComponent;
    }
  }
}
