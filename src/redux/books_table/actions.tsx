import { BooksTableActions } from "./types";

export function addBook(data:object) {
    return { type: BooksTableActions.ADD_BOOK, data};
}

export function getBooks(data:object) {
    return { type: BooksTableActions.GET_ALL_BOOKS, data};
}

export function deleteBook(data:string) {
    return { type: BooksTableActions.DELETE_BOOK, data};
}

export function changeDataBook(data:object) {
    return { type: BooksTableActions.CHANGE_DATA_BOOK, data};
}




