import { connect } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { TableBooksComponent } from "../components/booksTable/booksTableComponent";
import { addBook, getBooks, deleteBook, changeDataBook } from "../redux/booksTable/actions"

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
    newBookImg: state.booksTable.newBookImg
  });
 
  export default connect(
    mapStateToProps,
    {addBook, getBooks, deleteBook, changeDataBook},
  )(TableBooksComponent);
  
