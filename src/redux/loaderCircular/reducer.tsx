import { RootState } from "../rootReducer";
import { LoaderCircularState } from "./types";

export const initialState:LoaderCircularState = {
  isLoader: false,
};

export function loaderCircularReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case 'DO_LOADER_CIRCULAR': {
      return {
        ...state,
      }
    }
    case `LOADER_CIRCULAR_SHOW`: {
        
        return {
            ...state,
            isLoader: true
        }
    }
    case `LOADER_CIRCULAR_HIDE`: {
        return {
            isLoader: false
        };
      }

        default:
        return state;
}
}

export const error = (state: RootState) => state.loader.isLoader;
