import { connect } from "react-redux";
import { RootState } from "../redux/rootReducer";

import AdminComponent from "../components/admin/adminComponent";

const mapStateToProps = (state: RootState) => ({
    books: state.login.books,
    users: state.login.users
});
  
  export default connect(
    mapStateToProps,

  )(AdminComponent);
  