import { RootState } from "../rootReducer";
import { ErrortState } from "./types";

export const initialState:ErrortState = {
  error: "",
};

export function errorReducer(state: any = initialState, action: any) {
  switch (action.type) {
    
    case `ERROR_SHOW`: {
        const { error } = action.payload;
        return {
            ...state,
            error: error.error
        }
    }
    case `ERROR_HIDE`: {
        return {
          error: ""
        };
      }

        default:
        return state;
}
}

export const error = (state: RootState) => state.error;
