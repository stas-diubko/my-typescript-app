export enum ErrorActions {
    ERROR_OCCURED = "ERROR_OCCURED",
    ERROR_SHOW = "ERROR_SHOW",
    ERROR_HIDE = "ERROR_HIDE"
}
  
export interface ErrortState {
    error: string;  
}