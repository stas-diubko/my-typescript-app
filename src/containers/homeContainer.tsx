
import { connect } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { HomeComponent } from "../components/home/homeComponent";
import { doLogout } from "../redux/home/actions";


const mapStateToProps = (state: RootState) => ({
    email: state.home.email,
    name: state.home.name,
    logOut: state.home.logOut,
    isAdmin: state.home.isAdmin
  });

  export default connect(
    mapStateToProps,
    { doLogout },
  )(HomeComponent);
  
