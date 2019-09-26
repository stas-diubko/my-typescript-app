import { BooksTableMainActions } from "./types";

export function getBooksToMain() {
    return { type: BooksTableMainActions.GET_BOOKS_TO_MAIN};
}