import React from "react";
import {BasketState} from "../../redux/basket/types";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './basketComponent.css'

export interface  BasketProps {
    getDataBasket: () => any;
    increaseCount: (data:any) => any;
    decreaseCount: (data:any) => any;
    removeFromCart: (data:any) => any;
    basket: any;
    countItem: string;
    dataStore: any;

}

export class BasketComponent extends React.Component<BasketProps, BasketState> {

    state: BasketState = {
        basket: [],
        dataStore: []
    }
    // dataBasketStr:any
    
    componentDidMount () {

        const { getDataBasket } = this.props;
        getDataBasket() 
        // let dataBasketStr:any = localStorage.getItem('basket')
        // let aaa = JSON.parse(dataBasketStr)
        // this.setState({
        //     dataStore: aaa
        //   })

        // this.dataStore = JSON.parse(this.dataBasketStr)

        
    }
    
   
    onRemove = (e:any) => {
        const {removeFromCart} = this.props;
        removeFromCart(e.currentTarget.id)
        // console.log(e.currentTarget.id);
        
    }

    render () {
        

        let toIncrease = (e:any) => {
            let {increaseCount} = this.props;
            increaseCount(e.currentTarget.id)
             
        }

        let toDecrease = (e:any) => {
            let {decreaseCount} = this.props;
            decreaseCount(e.currentTarget.id)
            
        }
        

        // console.log(this.props.basket);

        let arrBasket = this.props.basket
        if(arrBasket == null) {
            arrBasket = []
        }
        
        const basketList = arrBasket.map((book:any) => <Grid item  xs={6} sm={6} 
        style={{width: '600px'}}
        >
        <Paper><div className="basket-item"> 
                <img src={book.bookImg} alt={book.bookAuthor}/>
                <div><b>{book.bookTitle}</b></div>
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
                    <h3>Basket</h3>
                    <Link to="/home">Home</Link>
                </div>
                <div className="basket-list-wrap" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    {/* <Grid id="basket-list-wrap" container spacing={6}> */}
                        {basketList}
                    {/* </Grid> */}
                </div>
                
            </div>
        )
    }
}

export default BasketComponent;