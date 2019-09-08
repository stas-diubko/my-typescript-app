import { connect } from "react-redux";
import { RootState } from "../redux/rootReducer";
import BasketComponent from "../components/basket/basketComponent";



const mapStateToProps = (state: RootState) => ({
    basket: state.basket.basket,
    
});
 
  export default connect(
    mapStateToProps,
  )(BasketComponent);
  
