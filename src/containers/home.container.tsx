import { connect } from "react-redux";
import { RootState } from "../redux/root.reducer";
import { HomeComponent } from "../components/home/home.component";
import { doLogout, getDataHome, doUserModalChange } from "../redux/home/actions";
import { onErrorOccured } from "../redux/error/actions";

const mapStateToProps = (state: RootState) => ({
    email: state.home.email,
    name: state.home.name,
    pass: state.home.pass,
    logOut: state.home.logOut,
    isAdmin: state.home.isAdmin,
    img: state.home.img,
    countBasket: state.home.countBasket
  });

  export default connect(
    mapStateToProps,
    { doLogout, getDataHome, doUserModalChange, onErrorOccured },
  )(HomeComponent);
  
