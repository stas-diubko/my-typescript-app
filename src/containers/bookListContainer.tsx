import { connect } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { BooksListComponent } from "../components/booksList/booksListComponent";
import { getBooks } from "../redux/booksTable/actions"

const mapStateToProps = (state: RootState) => ({
    books: state.booksTable.allBooks,
    
});
 
  export default connect(
    mapStateToProps,
    {getBooks},
  )(BooksListComponent);
  
