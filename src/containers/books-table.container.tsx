import { connect } from "react-redux";
import { RootState } from "../redux/root.reducer";
import { TableBooksComponent } from "../components/books_table/books-table.component";
import { addBook, getBooks, deleteBook, changeDataBook } from "../redux/books_table/actions"
import { onErrorOccured } from "../redux/error/actions";

const mapStateToProps = (state: RootState) => ({
    bookToAdd: state.booksTable.bookToAdd,
    allBooks: state.booksTable.allBooks,
    isOpenForm: state.booksTable.isOpenForm,
    bookTitle: state.booksTable.bookTitle,
    bookAuthor: state.booksTable.bookAuthor,
    bookDescript: state.booksTable.bookDescript,
    bookPrice: state.booksTable.bookPrice,
    bookImg: state.booksTable.bookImg,
    isOpenmodal: state.booksTable.isOpenmodal,
    newBookTitle: state.booksTable.newBookTitle,
    newBookAuthor: state.booksTable.newBookAuthor,
    newBookDescript: state.booksTable.newBookDescript,
    newBookPrice: state.booksTable.newBookPrice,
    newBookImg: state.booksTable.newBookImg,
    message: state.booksTable.message,
    booksLength: state.booksTable.booksLength
  });
 
  export default connect(
    mapStateToProps,
    {addBook, getBooks, deleteBook, changeDataBook, onErrorOccured},
  )(TableBooksComponent);
  
