import { connect } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { BooksListComponent } from "../components/booksList/booksListComponent";
import { getBooks } from "../redux/booksTable/actions";
import { addToBasket } from "../redux/basket/actions"

const mapStateToProps = (state: RootState) => ({
    books: state.booksTable.allBooks,
    message: state.booksTable.message
});
 
  export default connect(
    mapStateToProps,
    {getBooks, addToBasket},
  )(BooksListComponent);
  
