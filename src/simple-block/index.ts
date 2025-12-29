import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import Save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name as any, {
  edit: Edit,
  //   save:Save,
  save: () => null,
});
