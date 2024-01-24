import { STATUS } from "../../common/constants/store"

export interface IInitialValues {
    claims: string[],
    firstName: string,
    lastName: string,
    email: string,
    role: string,
  }
export interface ICollaboratorInfo {
    claims: string[],
    costQuestions:boolean,
    invited:boolean,
    joined:boolean,
    role:string,
    submitted:boolean,
    userId:string,
    _id:string,
}
export interface ICollaborator {
    cognitoId:string,
    collaborator:ICollaboratorInfo,
    id:string,
    isDeleted:boolean,
    newsletterStatus:boolean,
    roleInfo:string,
    firstName:string,
    lastName:string,
}
export interface ICollaboratorState  {
    collaboratorData:ICollaborator,
    status:STATUS,
    errors:any,
    message:string
}