export enum LoaderActions {
    DO_LOADER_CIRCULAR = "DO_LOADER_CIRCULAR",
    LOADER_CIRCULAR_SHOW = "LOADER_CIRCULAR_SHOW",
    LOADER_CIRCULAR_HIDE = "LOADER_CIRCULAR_HIDE"
}
  
export interface LoaderCircularState {
    isLoader: boolean;
}