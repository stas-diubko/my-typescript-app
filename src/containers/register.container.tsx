import { RootState } from "../redux/root.reducer";
import { connect } from "react-redux";
import { Register } from "../components/registration/registration";
import { doInit } from "../redux/registration/actions";

const mapStateToProps = (state: RootState) => ({
    users: state.register.users,
    isRegister: state.register.isRegister,
    isLoader: state.register.isLoader,
    error: state.error.error,
    isAdmin: state.register.isAdmin
  });

export default connect(
    mapStateToProps,
    { doInit }
  )(Register);
