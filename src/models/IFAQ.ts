export interface IFAQ{
    id:number,
    name:string,
    description?:string,
    resolved_task?:number[],
    html?:string,
    type:number
}