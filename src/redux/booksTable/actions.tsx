import { BooksTableActions } from "./types";

export function addBook(data:any) {
    return { type: BooksTableActions.ADD_BOOK, data};
}

export function getBooks(data:any) {
    return { type: BooksTableActions.GET_ALL_BOOKS, data};
}

export function deleteBook(data:any) {
    return { type: BooksTableActions.DELETE_BOOK, data};
}

export function changeDataBook(data:any) {
    return { type: BooksTableActions.CHANGE_DATA_BOOK, data};
}

export function getCurrentBookBook(data:any) {
    return { type: BooksTableActions.GET_CURRENT_BOOK, data};
}

export function toSortBooks() {
    return { type: BooksTableActions.SORT_BOOK};
}

