import metadata from './block.json';
// export type BlockAttributes =  typeof metadata.attributes;
export interface BlockAttributes{
    perPage:number,
    category?:string,
    template?:string,
}