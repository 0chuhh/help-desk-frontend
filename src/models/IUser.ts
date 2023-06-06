interface IRole {
    name:string
}
export interface IUser {
    username?: string;
    email?: string;
    token?: string;
    isStaff:boolean;
    roles?: IRole[];
    image?:string
}