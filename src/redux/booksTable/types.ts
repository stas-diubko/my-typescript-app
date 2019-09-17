export enum BooksTableActions {
    GET_ALL_BOOKS  = "GET_ALL_BOOKS",
    ADD_BOOK = "ADD_BOOK",
    GOT_BOOKS = "GOT_BOOKS",
    DELETE_BOOK = "DELETE_BOOK",
    CHANGE_DATA_BOOK = "CHANGE_DATA_BOOK",
    GET_CURRENT_BOOK = "GET_CURRENT_BOOK",
    GOT_CURRENT_BOOK = "GOT_CURRENT_BOOK"
}
  
export interface BooksTableState {
  bookToAdd: Object;
  allBooks: any;
  isOpenForm: boolean; 
  bookTitle: string;
  bookAuthor: string;
  bookDescript: string;
  bookPrice: string;
  bookImg: any;
  isOpenmodal: boolean; 
  newBookTitle: string;
  newBookAuthor: string;
  newBookDescript: string;
  newBookPrice: string;
  newBookImg: any;
  bookId: any;
}
  