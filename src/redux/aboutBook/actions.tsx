import { AboutBookActions } from "./types";

export function getIdBook(data:string) {
    return { type: AboutBookActions.GET_ID_BOOK, data};
}