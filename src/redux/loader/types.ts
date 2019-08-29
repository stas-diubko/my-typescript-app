export enum LoaderActions {
    DO_LOADER = "DO_LOADER",
    LOADER_SHOW = "LOADER_SHOW",
    LOADER_HIDE = "LOADER_HIDE"
}
  
export interface LoaderState {
    isLoader: boolean;
    
}