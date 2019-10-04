import { RootState } from "../redux/root.reducer";
import { connect } from "react-redux";
import { Loader } from "../components/loader_circular/loader.circular";

const mapStateToProps = (state: RootState) => ({
    isLoader: state.loaderCircular.isLoader,   
  });
 
  export default connect(
     mapStateToProps,
   )(Loader);
 
 