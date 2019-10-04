import { connect } from "react-redux";
import { RootState } from "../redux/root.reducer";
import BasketComponent from "../components/basket/basket.component";
import {increaseCount, getDataBasket, decreaseCount, removeFromCart} from "../redux/basket/actions"

const mapStateToProps = (state: RootState) => ({
    basket: state.basket.basket,
});
 
  export default connect(
    mapStateToProps,
    {increaseCount, getDataBasket, decreaseCount, removeFromCart},
  )(BasketComponent);
  
