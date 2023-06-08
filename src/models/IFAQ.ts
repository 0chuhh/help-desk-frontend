export interface IFAQFile{
    id?:number,
    name:string,
    file:string,
    faq:number
}
export interface IFAQ{
    id?:number,
    name:string,
    description?:string,
    resolved_task?:number[],
    html?:string,
    type:number,
    files?:IFAQFile[]
}