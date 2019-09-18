import { AboutBookState } from "./types"

export const initialState: AboutBookState = {
    book: '',
    id: '',
    isShow: false
};

export function aboutBookReducer(state: AboutBookState = initialState, action: any) {
    switch (action.type) {
        case 'GOT_ID_BOOK': {

            return {
                ...state,
                book: action.payload.book,
                isShow: true
            }

            
        }

        case "RETURN_IS_SHOW": {
            return {
                ...state,
                isShow: false
            }
        }
      
        default:
            return state;
        
    }
}
