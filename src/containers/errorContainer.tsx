import { RootState } from "../redux/rootReducer";
import { connect } from "react-redux";
import ErrorComponent from "../components/error/errorComponent";
import { onErrorOccured } from "../redux/error/actions";



const mapStateToProps = (state: RootState) => ({
   error: state.error.error,
  });


export default connect(
    mapStateToProps,
    {onErrorOccured},
  )(ErrorComponent);

