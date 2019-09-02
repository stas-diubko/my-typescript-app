export enum UserModalActions {
    DO_USER_CHANGE = "DO_USER_CHANGE",
    CHANGE_USER_DATA = "CHANGE_USER_DATA",
    GET_USER_DATA = "GET_USER_DATA"
    
}

export interface UserModalState {
    name: any;
    img: string; 
    isChangeData: boolean; 
    imgChange: any;
}
  
export interface UserChange {
    name: any;
    imgChange: any;
    id: number;
}