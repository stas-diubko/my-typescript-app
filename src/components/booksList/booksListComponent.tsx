import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './bookListComponent.css';
import {Link} from "react-router-dom";
import LoaderCircular from '../../containers/loaderCircularContainer';

export interface  BooksListProps {
    getBooks: () => Object;
    addToBasket: (data:any) => any;
    books: [],
    message: string;
}

export class BooksListComponent extends React.Component<BooksListProps, any> {

    state = {
        books: [],
        message: ''
    }

    componentDidMount () {
        const { getBooks } = this.props;
        getBooks(); 
    }

      onAddToBasket = (e:any) => {
        const books:any = this.props.books
        const currentBook = books.filter((x:any) => x._id == e.currentTarget.id);
        
        const { addToBasket } = this.props;
        addToBasket({bookTitle: currentBook[0].bookTitle,
            bookAuthor: currentBook[0].bookAuthor,
            bookDescript: currentBook[0].bookDescript,
            bookImg: currentBook[0].bookImg,
            bookPrice: currentBook[0].bookPrice,
            bookCount: 1,
            totalPrice: '',
            id: e.currentTarget.id
        })
      }
     
    render () {
        
        const booksList = this.props.books.map((book:any) => <Grid xs={12} sm={6} lg={3} item  key={book._id} >
                <Paper style={{margin: '5px'}}><div className="book-item-wrap" > 
                        <img src={book.bookImg} alt={book.bookAuthor}/>
                        <div><b>{book.bookTitle}</b></div>
                        <div><b>Author: </b>{book.bookAuthor}</div>
                        <div><b>Description: </b>{book.bookDescript}</div>
                        <div><b>Price: </b>{book.bookPrice} $</div>
                        <Link id={book._id} style={{display: "block", fontSize: "16px"}} to={`books/${book._id}`} >See More</Link>
                        <Button id={book._id} className="btn" variant="contained" color="primary" onClick={(e:any)=>this.onAddToBasket(e)}>Add to basket</Button>
                    </div>
                </Paper>
            </Grid>)

        return(
            <div className="book-list-wrap" style={{position:"relative"}}>
            <LoaderCircular/>
                <Grid container spacing={3}>
                    {booksList} 
                </Grid>
                <div style={{display:"flex", justifyContent:"center", width:"100%", height:"150px", alignItems:"center", fontSize:"24px"}}><span>{this.props.message}</span></div>
            </div>
        )
    }
}

export default BooksListComponent;