export enum BooksTableActions {
    GET_ALL_BOOKS  = "GET_ALL_BOOKS",
    ADD_BOOK = "ADD_BOOK",
    GOT_BOOKS = "GOT_BOOKS",
    DELETE_BOOK = "DELETE_BOOK"
    
    
}
  
export interface BooksTableState {
  bookToAdd: Object;
  allBooks: any;
  isOpenForm: boolean; 
}
  