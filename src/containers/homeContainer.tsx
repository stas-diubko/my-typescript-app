
import { connect } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { HomeComponent } from "../components/home/homeComponent";

const mapStateToProps = (state: RootState) => ({
    email: state.login.email,
  });

  export default connect(
    mapStateToProps,
  )(HomeComponent);
  
