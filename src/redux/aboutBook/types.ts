export enum AboutBookActions {
    GET_ID_BOOK = "GET_ID_BOOK",
    GOT_ID_BOOK = "GOT_ID_BOOK"
}

export interface AboutBookState {
    book: any;
    id: any;
}