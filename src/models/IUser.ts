interface IRole {
    name:string
}
export interface IUser {
    username?: string;
    email?: string;
    token?: string;
    roles?: IRole[]
}