import { connect } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { getUsers, getId } from "../redux/admin/actions";
import { deleteUser } from "../redux/usersTable/actions";

import { AdminComponent } from "../components/admin/adminComponent";

const mapStateToProps = (state: RootState) => ({
    books: state.login.books,
    users: state.login.users,
    isAdmin: state.admin.isAdmin
});
  
  export default connect(
    mapStateToProps,
    { getUsers, getId }, 
  )(AdminComponent);
  

  