import { RootState } from "../redux/rootReducer";
import { connect } from "react-redux";
import { Loader } from "../components/loader/loader";


const mapStateToProps = (state: RootState) => ({
    isLoader: state.loader.isLoader,
    
   });
 
 
 export default connect(
     mapStateToProps,
   )(Loader);
 
 