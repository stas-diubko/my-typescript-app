import { BooksTableActions } from "./types";


export function addBook(data:any) {
    return { type: BooksTableActions.ADD_BOOK, data};
}

export function getBooks() {
    return { type: BooksTableActions.GET_ALL_BOOKS};
}

export function deleteBook(data:any) {
    return { type: BooksTableActions.DELETE_BOOK, data};
}

