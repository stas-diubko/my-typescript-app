import { BookListState } from "./types";
import { RootState } from "../rootReducer";

export const initialState: BookListState = {
    books: '',
};


export function bookListReducer(state: BookListState = initialState, action: any) {
    switch (action.type) {
        case '': {
           
            return {
                ...state,
                

            }
        }
        


        
        default:
            return state;
        
    }
}

// export const bookList = (state: RootState) => state.bookList;