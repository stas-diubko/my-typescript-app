import { connect } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { AboutBookComponent } from "../components/aboutBook/aboutBook";
import { getIdBook } from "../redux/aboutBook/actions"

const mapStateToProps = (state: RootState) => ({
    book: state.aboutBook.book, 
    id: state.aboutBook.id,
    isShow: state.aboutBook.isShow
});

export default connect(
    mapStateToProps,
    {getIdBook},
  )(AboutBookComponent);
  
