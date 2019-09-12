import { AboutBookState } from "./types"

export const initialState: AboutBookState = {
    book: '',
    id: ''
};

export function aboutBookReducer(state: AboutBookState = initialState, action: any) {
    switch (action.type) {
        case 'GOT_ID_BOOK': {

            return {
                ...state,
                book: action.payload.book

            }
        }
      
        default:
            return state;
        
    }
}
