import { BooksTableMainState } from "./types";
import { RootState } from "../root.reducer";

export const initialState: BooksTableMainState = {
    books: [],
    message: '',
};

export function booksListReducer(state: BooksTableMainState = initialState, action: any) {
    switch (action.type) {
        case 'GOT_BOOKS_TO_MAIN': {
           let msg = ''
           if(action.payload.books.length == 0) {
               msg = 'No products added yet'
           }
           else {
            msg = ''
           }
           
            return {
                ...state,
                books: action.payload.books,
                message: msg,
            }
        }
 
        default:
            return state;
        
    }
}

export const booksTable = (state: RootState) => state.booksTable;