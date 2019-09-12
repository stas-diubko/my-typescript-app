import { AboutBookActions } from "./types";

export function getIdBook(data:any) {
    return { type: AboutBookActions.GET_ID_BOOK, data};
}