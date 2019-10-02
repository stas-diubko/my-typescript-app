import React from "react";
import {BasketState} from "../../redux/basket/types";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './basketComponent.css';
import { Redirect } from 'react-router';

export interface  BasketProps {
    getDataBasket: () => object;
    increaseCount: (data:string) => object;
    decreaseCount: (data:string) => object;
    removeFromCart: (data:string) => object;
    basket: Array<any>; 
    countItem: string;
    dataStore: object[];
}

export class BasketComponent extends React.Component<BasketProps, BasketState> {

    state: BasketState = {
        basket: [],
        dataStore: []
    }

    componentDidMount () {
        const { getDataBasket } = this.props;
        getDataBasket() 
    }
       
    onRemove = (e:any) => {
        const {removeFromCart} = this.props;
        removeFromCart(e.currentTarget.id)

        const { getDataBasket } = this.props;
        getDataBasket()
    }

    render () {
        let dataBasketStr:any = localStorage.getItem('basket')
        
        if (dataBasketStr == null) {
            return <Redirect to="/home"/>
        }

        let toIncrease = (e:any) => {
            let {increaseCount} = this.props;
            increaseCount(e.currentTarget.id)
            const { getDataBasket } = this.props;
            getDataBasket()
        }

        let toDecrease = (e:any) => {
            let {decreaseCount} = this.props;
            decreaseCount(e.currentTarget.id)
            const { getDataBasket } = this.props;
            getDataBasket()
        }

        let arrBasket = this.props.basket
                
        if(arrBasket == null) {
            arrBasket = []
        } 

        let cartSumm:number = 0;
        
        for (let i = 0; i < this.props.basket.length; i++){
            cartSumm = +cartSumm + +this.props.basket[i].totalPrice
        }
        
        let buyBlock = <div style={{display: "flex"}}><div style={{margin: "20px auto 20px"}}><Button style={{ backgroundColor: "lime", width: "200px"}}>Buy</Button></div></div> 
        let message = '';

        if (this.props.basket.length == 0){
            buyBlock = <div></div>
            message = 'Cart is empty :(';
        }

        const basketList = arrBasket.map((book:any) => <Grid key={book.id}  item  xs={6} sm={6} 
            style={{width: '600px'}}
        >
        <Paper><div className="basket-item"> 
                <img src={book.bookImg} alt={book.bookAuthor}/>
                <div><b>{book.title}</b></div>
                <div><b>Author: </b>{book.bookAuthor}</div>
                <div><b>Description: </b>{book.bookDescript}</div>
                <div><b>Price: </b>{book.bookPrice} $</div>
                <div className="btns-change"><Button id={book.id} variant="contained" color="primary" onClick={(e:any)=>toDecrease(e)}>-</Button><div className="amount">{book.bookCount}</div><Button id={book.id} variant="contained" color="primary" onClick={(e:any)=>toIncrease(e)}>+</Button></div>
                <div className="total-item">Total price: {book.totalPrice} $ </div>
                <Button id={book.id} variant="contained" style={{backgroundColor: 'pink'}} onClick={(e:any) => this.onRemove(e)}>Remove</Button>
            </div></Paper>
    </Grid>)
        return (
            <div>
                <div className="home-header">
                    <h2>Basket</h2>
                    <div style={{ margin: "20px 150px 0 0"}}><span style={{fontWeight: "bold", fontSize: "20px"}}>Total cart: {cartSumm} $</span></div>
                    <Link style={{margin: "22px 0 0 20px "}} to="/home">Home</Link>
                </div>
                <div className="basket-list-wrap" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <span style={{fontWeight: "bold", fontSize: "20px", color: "brown"}}>{message}</span>
                        {basketList}
                        {buyBlock}
                </div>
            </div>
        )
    }
}

export default BasketComponent;