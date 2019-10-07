import { connect } from "react-redux";
import { RootState } from "../redux/root.reducer";
import { getUsers} from "../redux/admin/actions";
import { AdminComponent } from "../components/admin/admin.component";

const mapStateToProps = (state: RootState) => ({
    books: state.login.books,
    users: state.login.users,
    isAdmin: state.admin.isAdmin,
    usersLength: state.admin.usersLength
});
  
  export default connect(
    mapStateToProps,
    { getUsers}, 
  )(AdminComponent);
  
 
  