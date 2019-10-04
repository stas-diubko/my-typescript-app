import { connect } from "react-redux";
import { RootState } from "../redux/root.reducer";
import { AboutBookComponent } from "../components/about_book/about-book.component";
import { getIdBook } from "../redux/about_book/actions"

const mapStateToProps = (state: RootState) => ({
    book: state.aboutBook.book, 
    id: state.aboutBook.id,
    isShow: state.aboutBook.isShow
});

export default connect(
    mapStateToProps,
    {getIdBook},
  )(AboutBookComponent);
  
