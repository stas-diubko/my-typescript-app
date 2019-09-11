import { ErrorActions } from "./types";

export function onErrorOccured(error: string) {
  return { type: ErrorActions.ERROR_OCCURED, error };
}
