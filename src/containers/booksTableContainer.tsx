import { connect } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { TableBooksComponent } from "../components/booksTable/booksTableComponent";
import { addBook, getBooks, deleteBook } from "../redux/booksTable/actions"

const mapStateToProps = (state: RootState) => ({
    bookToAdd: state.booksTable.bookToAdd,
    allBooks: state.booksTable.allBooks,
    isOpenForm: state.booksTable.isOpenForm,
    bookTitle: state.booksTable.bookTitle,
    bookAuthor: state.booksTable.bookAuthor,
    bookDescript: state.booksTable.bookDescript,
    bookPrice: state.booksTable.bookPrice,
    bookImg: state.booksTable.bookImg
  });
 
  export default connect(
    mapStateToProps,
    {addBook, getBooks, deleteBook},
  )(TableBooksComponent);
  
