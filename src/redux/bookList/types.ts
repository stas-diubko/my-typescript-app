export enum BooksTableMainActions {
    GET_BOOKS_TO_MAIN  = "GET_BOOKS_TO_MAIN",
    GOT_BOOKS_TO_MAIN  = "GOT_BOOKS_TO_MAIN"
}

export interface BooksTableMainState {
    books:any;
    message: string; 
}