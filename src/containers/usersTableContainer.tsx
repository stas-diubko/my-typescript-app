import { connect } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { TableUsersComponent } from "../components/usersTable/usersTableComponent";
import { deleteUser } from "../redux/usersTable/actions"

const mapStateToProps = (state: RootState) => ({
    users: state.admin.users
  });

  export default connect(
    mapStateToProps,
    {deleteUser},
  )(TableUsersComponent);
  
