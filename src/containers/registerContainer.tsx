import { RootState } from "../redux/rootReducer";
import { connect } from "react-redux";
import { Register } from "../components/registration/registration";
import { doInit } from "../redux/registration/actions";


const mapStateToProps = (state: RootState) => ({
   
    users: state.register.users,
    
  });


export default connect(
    mapStateToProps,
    { doInit }
  )(Register);
