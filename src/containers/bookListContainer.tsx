import { connect } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { BooksListComponent } from "../components/booksList/booksListComponent";
import { getBooksToMain } from "../redux/bookList/actions";
import { addToBasket } from "../redux/basket/actions"

const mapStateToProps = (state: RootState) => ({
    books: state.bookList.books,
    message: state.bookList.message
});
 
  export default connect(
    mapStateToProps,
    {getBooksToMain, addToBasket},
  )(BooksListComponent);
  