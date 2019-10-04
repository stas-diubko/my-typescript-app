import { connect } from "react-redux";
import { RootState } from "../redux/root.reducer";
import { BooksListComponent } from "../components/books_list/books-list.component";
import { getBooksToMain } from "../redux/book_list/actions";
import { addToBasket } from "../redux/basket/actions"

const mapStateToProps = (state: RootState) => ({
    books: state.bookList.books,
    message: state.bookList.message
});
 
  export default connect(
    mapStateToProps,
    {getBooksToMain, addToBasket},
  )(BooksListComponent);
  