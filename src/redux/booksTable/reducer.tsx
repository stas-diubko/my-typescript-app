import { BooksTableState } from "./types";
import { RootState } from "../rootReducer";

export const initialState: BooksTableState = {
    bookToAdd: {},
    allBooks: [],
    isOpenForm:false,
    bookTitle: '',
    bookAuthor: '',
    bookDescript: '',
    bookPrice: '',
    bookImg: '',
    isOpenmodal: false,
    newBookTitle: '',
    newBookAuthor: '',
    newBookDescript: '',
    newBookPrice: '',
    newBookImg: '',
    bookId: '',
    message: ''
};


export function booksTableReducer(state: BooksTableState = initialState, action: any) {
    switch (action.type) {
        case 'GOT_BOOKS': {
           let msg = ''
           if(action.payload.books.length == 0) {
               msg = 'No products added yet'
           }
           else {
            msg = ''
           }
            return {
                ...state,
                allBooks: action.payload.books,
                message: msg
            }
        }
 
        default:
            return state;
        
    }
}

export const booksTable = (state: RootState) => state.booksTable;