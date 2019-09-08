import React from "react";
import {BasketState} from "../../redux/basket/types";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './basketComponent.css'
export interface  BasketProps {
    basket: any;
}

export class BasketComponent extends React.Component<BasketProps, BasketState> {

    state: BasketState = {
        basket: []
    }

    render () {
        const basketList = this.props.basket.map((book:any) => <Grid item xs={12} >
        <Paper><div className="book-item-wrap"> 
                <img src={book.bookImg} alt={book.bookAuthor}/>
                <div><b>{book.bookTitle}</b></div>
                <div><b>Author: </b>{book.bookAuthor}</div>
                <div><b>Description: </b>{book.bookDescript}</div>
                <div><b>Price: </b>{book.bookPrice} $</div>
                <div><Button variant="contained" color="primary">-</Button><div className="amount">0</div><Button variant="contained" color="primary">+</Button></div>
                <div>Total price:</div>
            </div></Paper>
    </Grid>)
        return (
            <div>
                <div className="home-header">
                    <h3>Basket</h3>
                    <Link to="/home">Home</Link>
                </div>
                <Grid container spacing={3}>
                    {basketList}
                </Grid>
            </div>
        )
    }
}

export default BasketComponent;