import metadata from './block.json';
// export type BlockAttributes =  typeof metadata.attributes;
export interface BlockAttributes{
    message:string,
    counter:number,
    imageUrl?:string,
    imageId?:number,
}