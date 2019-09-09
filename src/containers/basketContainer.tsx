import { connect } from "react-redux";
import { RootState } from "../redux/rootReducer";
import BasketComponent from "../components/basket/basketComponent";
import {increaseCount, getDataBasket, decreaseCount} from "../redux/basket/actions"


const mapStateToProps = (state: RootState) => ({
    basket: state.basket.basket,
    
});
 
  export default connect(
    mapStateToProps,
    {increaseCount, getDataBasket, decreaseCount},
  )(BasketComponent);
  
