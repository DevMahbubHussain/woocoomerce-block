import { registerBlockType } from '@wordpress/blocks';
import { ProductTitle } from './edit';
import metadata from './block.json';

registerBlockType(metadata.name as any, {
  edit:ProductTitle,
  save: () => null,
});

export { ProductTitle };