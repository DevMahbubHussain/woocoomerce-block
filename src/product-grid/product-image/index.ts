import { registerBlockType } from '@wordpress/blocks';
import { ProductImage } from './edit';
import metadata from './block.json';

registerBlockType(metadata.name as any, {
  edit:ProductImage,
  save: () => null,
});

export { ProductImage };