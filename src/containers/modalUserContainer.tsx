import { connect } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { ModalUserComponent } from "../components/modalUser/modalUser";
import { doUserModalChange } from "../redux/modalUser/actions";

const mapStateToProps = (state: RootState) => ({
    name: state.userModal.name,
    img: state.userModal.img,
    isChangeData: state.userModal.isChangeData,
    imgChange: state.userModal.imgChange
});
  
export default connect(
    mapStateToProps,
    { doUserModalChange }
) (ModalUserComponent);
  