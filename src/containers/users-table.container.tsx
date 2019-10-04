import { connect } from "react-redux";
import { RootState } from "../redux/root.reducer";
import { TableUsersComponent } from "../components/usersTable/users-table.component";
import { deleteUser } from "../redux/users_table/actions"
import { getUsers } from "../redux/admin/actions"

const mapStateToProps = (state: RootState) => ({
    users: state.admin.users,
    usersLength: state.admin.usersLength
  });

  export default connect(
    mapStateToProps,
    {deleteUser, getUsers},
  )(TableUsersComponent);
  
