import { connect } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { getUsers, deleteUser } from "../redux/admin/actions";
import { AdminComponent } from "../components/admin/adminComponent";

const mapStateToProps = (state: RootState) => ({
    books: state.login.books,
    users: state.login.users
});
  
  export default connect(
    mapStateToProps,
    { getUsers },
   
  )(AdminComponent);
  

  