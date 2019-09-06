import React from "react";
import { BookListState } from "../../redux/booksList/types";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './bookListComponent.css'

export interface  BooksListProps {
    getBooks: () => Object;
    books: []
}

export class BooksListComponent extends React.Component<BooksListProps, BookListState> {

    state: BookListState = {
        books: []
    }


    componentDidMount () {
        const { getBooks } = this.props;
        getBooks() 
        setTimeout(() => {
            // console.log(this.props.books);
            
        }, 2000);
        
        // console.log(this.props);
        
      }
    
    render () {

        const booksList = this.props.books.map((book:any) => <Grid item xs={12} sm={6}>
            <Paper><div className="book-item-wrap"> 
                    <img src={book.bookImg} alt={book.bookAuthor}/>
                    <div><b>{book.bookTitle}</b></div>
                    <div><b>Author: </b>{book.bookAuthor}</div>
                    <div><b>Description: </b>{book.bookDescript}</div>
                    <div><b>Price: </b>{book.bookPrice}</div>
                    <Button id={book.id} className="btn" variant="contained" color="primary">Add to basket</Button>
                </div></Paper>
        </Grid>)

        return(
            <div className="book-list-wrap">
                <Grid container spacing={3}>
                    {booksList}
                </Grid>
            </div>
        )
    }
}


export default BooksListComponent;