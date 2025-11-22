import type { Schema, Struct } from '@strapi/strapi';

export interface BasicComponentComponents extends Struct.ComponentSchema {
  collectionName: 'components_basic_component_components';
  info: {
    displayName: 'components';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'basic-component.components': BasicComponentComponents;
    }
  }
}
