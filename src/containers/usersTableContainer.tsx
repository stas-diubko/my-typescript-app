import { connect } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { TableUsersComponent } from "../components/usersTable/usersTableComponent";
import { deleteUser } from "../redux/usersTable/actions"
import { getUsers } from "../redux/admin/actions"

const mapStateToProps = (state: RootState) => ({
    users: state.admin.users,
    usersLength: state.admin.usersLength
  });

  export default connect(
    mapStateToProps,
    {deleteUser, getUsers},
  )(TableUsersComponent);
  
