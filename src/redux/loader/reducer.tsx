import { RootState } from "../rootReducer";
import { LoaderState } from "./types";

export const initialState:LoaderState = {
  isLoader: false,
  
};

export function loaderReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case 'DO_LOADER': {
      return {
        ...state,
    }
    }
    case `LOADER_SHOW`: {
        const load  = action.payload;
        return {
            ...state,
            isLoader: load.isLoader.isLoader
        }
    }
    case `LOADER_HIDE`: {
        return {
            isLoader: false
        };
      }

        default:
        return state;
}
}

export const error = (state: RootState) => state.loader.isLoader;
