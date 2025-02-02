import { connect } from "react-redux";
import { RootState } from "../redux/root.reducer";
import { LoginComponent } from "../components/login/login.component";
import { doLogin } from "../redux/login/actions";

const mapStateToProps = (state: RootState) => ({
    email: state.login.email,
    pass: state.login.pass,
    isLoading: state.login.isLoading,
    emailFromRegister: state.register.email,
    passFromRegister: state.register.pass,
    users: state.login.users,
    books: state.login.books
});
   
  export default connect(
    mapStateToProps,
    { doLogin }
  )(LoginComponent);
  