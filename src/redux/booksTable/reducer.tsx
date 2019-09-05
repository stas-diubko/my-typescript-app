import { BooksTableState } from "./types";
import { RootState } from "../rootReducer";

export const initialState: BooksTableState = {
    bookToAdd: {},
    allBooks: [],
    isOpenForm:false
};


export function booksTableReducer(state: BooksTableState = initialState, action: any) {
    switch (action.type) {
        case 'GOT_BOOKS': {
            const books = action.payload
            // console.log(books.books); 
            
            return {
                ...state,
                allBooks: books.books

            }
        }
        


        
        default:
            return state;
        
    }
}

export const booksTable = (state: RootState) => state.booksTable;