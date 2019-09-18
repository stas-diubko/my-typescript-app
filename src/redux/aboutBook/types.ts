export enum AboutBookActions {
    GET_ID_BOOK = "GET_ID_BOOK",
    GOT_ID_BOOK = "GOT_ID_BOOK",
    RETURN_IS_SHOW = "RETURN_IS_SHOW"
}

export interface AboutBookState {
    book: any;
    id: any;
    isShow: boolean;
}