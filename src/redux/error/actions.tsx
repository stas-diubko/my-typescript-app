import { ErrorActions } from "./types";

export function onErrorOccured(data: string) {
  return { type: ErrorActions.ERROR_OCCURED, data };
}
