import { registerBlockType } from '@wordpress/blocks';
import { ProductPrice } from './edit';
import metadata from './block.json';

registerBlockType(metadata.name as any, {
  edit:ProductPrice,
  save: () => null,
});

export { ProductPrice };