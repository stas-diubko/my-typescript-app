import { RootState } from "../redux/rootReducer";
import { connect } from "react-redux";
import { Loader } from "../components/loaderCircular/loaderCircular";

const mapStateToProps = (state: RootState) => ({
    isLoader: state.loaderCircular.isLoader,   
  });
 
  export default connect(
     mapStateToProps,
   )(Loader);
 
 