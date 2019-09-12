import React from "react";
import { BookListState } from "../../redux/booksList/types";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './bookListComponent.css'
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
// import { Link } from "@material-ui/core";
import {Route, Link, LinkProps, BrowserRouter as Router} from "react-router-dom";
// import { LinkProps } from "@material-ui/core/Link";
import AdminComponent from '../../containers/adminContainer';



// const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
//     <Link innerRef={ref as any} {...props} />
//   ));

export interface  BooksListProps {
    getBooks: () => Object;
    addToBasket: (data:any) => any;
    // getIdBook: (data:any) => any;
    books: []
}

export class BooksListComponent extends React.Component<BooksListProps, BookListState> {

    state: BookListState = {
        books: [],
    }

    componentDidMount () {
        const { getBooks } = this.props;
        getBooks() 

        
    }

      onAddToBasket = (e:any) => {
        const books:any = this.props.books
        const currentBook = books.filter((x:any) => x.id == e.currentTarget.id);
        
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

      onSeeMore = (e:any) => {
        // console.log(e.currentTarget.id);
        // const { getIdBook } = this.props;
        // getIdBook(e.currentTarget.id) 
        // this.setState({
        //     isModalMore: !this.state.isModalMore
        //   })
      }



     
    //   onModalMore = () => {
    //     this.setState({
    //       isModalMore: !this.state.isModalMore
    //     })
    //   }


    



    render () {
        

        const booksList = this.props.books.map((book:any) => <Grid xs={12} sm={6} lg={3} item  key={book.id}
        //  component={AdapterLink} to={{
        //     pathname: `/home/00`,
            
        //   }}
          >
            <Paper style={{margin: '5px'}}><div className="book-item-wrap" > 
                    <img src={book.bookImg} alt={book.bookAuthor}/>
                    <div><b>{book.bookTitle}</b></div>
                    <div><b>Author: </b>{book.bookAuthor}</div>
                    <div><b>Description: </b>{book.bookDescript}</div>
                    <div><b>Price: </b>{book.bookPrice} $</div>

                    {/* <div><span id={book.id} className="see-more" onClick={(e:any)=>this.onSeeMore(e)}>See More</span></div> */}
                    <Link id={book.id} style={{display: "block", fontSize: "16px"}} to={`books/${book.id}`} onClick={(e:any)=>this.onSeeMore(e)}>See More</Link>
                    <Button id={book.id} className="btn" variant="contained" color="primary" onClick={(e:any)=>this.onAddToBasket(e)}>Add to basket</Button>
                
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