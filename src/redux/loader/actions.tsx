import { LoaderActions } from "./types";

export function onLoaderOccured(error: string) {
    return { type: LoaderActions.DO_LOADER, error };
  }
  