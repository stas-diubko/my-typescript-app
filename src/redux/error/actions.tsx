import { ErrorActions } from "./types";

// import { createAction } from "typesafe-actions";
// import { LoginActions, LoginResult, LoginRequest } from "./types";



export function onErrorOccured(error: string) {
  return { type: ErrorActions.ERROR_OCCURED, error };
}
