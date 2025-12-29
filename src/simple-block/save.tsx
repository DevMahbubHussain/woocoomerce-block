import { BlockSaveProps } from "@wordpress/blocks";
import { BlockAttributes } from "./types";

type props = BlockSaveProps<BlockAttributes>;

export default function Save({attributes}:props){

    return(
        <p>{attributes.message}</p>
    )

}