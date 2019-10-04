import { RootState } from "../redux/root.reducer";
import { connect } from "react-redux";
import { Loader } from "../components/loader/loader";

const mapStateToProps = (state: RootState) => ({
    isLoader: state.loader.isLoader,   
  });
 
  export default connect(
     mapStateToProps,
   )(Loader);
 
 