import React from "react";
import { BookListState } from "../../redux/booksList/types";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './bookListComponent.css'

export interface  BooksListProps {
    getBooks: () => Object;
    addToBasket: (data:any) => any;
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

      onAddToBasket = (e:any) => {
        //   console.log('add', e.currentTarget.id)
        //   console.log(this.props.books) 
  
          const books:any = this.props.books
          const currentBook = books.filter((x:any) => x.id == e.currentTarget.id);
        //   console.log(currentBook[0]) 

      const { addToBasket } = this.props;
      addToBasket({bookTitle: currentBook[0].bookTitle,
        bookAuthor: currentBook[0].bookAuthor,
        bookDescript: currentBook[0].bookDescript,
        bookImg: currentBook[0].bookImg,
        bookPrice: currentBook[0].bookPrice,
        bookCount: 1,
        totalPrice: '',
        id: currentBook[0].id
    })
        
      }
     
    render () {

        const booksList = this.props.books.map((book:any) => <Grid xs={12} sm={6} lg={3} item  >
            <Paper style={{margin: '5px'}}><div className="book-item-wrap" > 
                    <img src={book.bookImg} alt={book.bookAuthor}/>
                    <div><b>{book.bookTitle}</b></div>
                    <div><b>Author: </b>{book.bookAuthor}</div>
                    <div><b>Description: </b>{book.bookDescript}</div>
                    <div><b>Price: </b>{book.bookPrice} $</div>
                    <Button id={book.id} className="btn" variant="contained" color="primary" onClick={(e:any)=>this.onAddToBasket(e)}>Add to basket</Button>
                </div></Paper>
        </Grid>)

        return(
            <div className="book-list-wrap">
                <Grid container spacing={3}>
                {/* <div 
                // style={{display: 'flex', flexDirection: 'row'}}
                > */}
                    {booksList}
                {/* </div> */}
                    
                </Grid>
            </div>
        )
    }
}


export default BooksListComponent;