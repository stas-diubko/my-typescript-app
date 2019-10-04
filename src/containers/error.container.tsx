import { RootState } from "../redux/root.reducer";
import { connect } from "react-redux";
import ErrorComponent from "../components/error/error.component";
import { onErrorOccured } from "../redux/error/actions";

const mapStateToProps = (state: RootState) => ({
   error: state.error.error,
  });

export default connect(
    mapStateToProps,
    {onErrorOccured},
  )(ErrorComponent);

