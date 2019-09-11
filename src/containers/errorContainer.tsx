import { RootState } from "../redux/rootReducer";
import { connect } from "react-redux";
import { Register } from "../components/registration/registration";
import ErrorComponent from "../components/error/errorComponent";



const mapStateToProps = (state: RootState) => ({
   error: state.error.error,
  });


export default connect(
    mapStateToProps,
  )(ErrorComponent);

